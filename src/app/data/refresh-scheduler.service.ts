import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, timer, switchMap, takeUntil, shareReplay, refCount } from 'rxjs';
import { DataSourceService } from './data-source.service';
import { CacheService } from './cache.service';
import { DataSourceConfig, WidgetData } from '../core/models/widget.model';

interface RefreshTask {
  subject: Subject<WidgetData>;
  observable: Observable<WidgetData>;
  interval: number;
  stop$: Subject<void>;
  config: DataSourceConfig;
}

@Injectable({
  providedIn: 'root'
})
export class RefreshSchedulerService implements OnDestroy {
  private tasks = new Map<string, RefreshTask>();

  constructor(
    private dataSourceService: DataSourceService,
    private cacheService: CacheService
  ) {}

  ngOnDestroy(): void {
    this.stopAll();
  }

  subscribe(widgetId: string, config: DataSourceConfig, intervalSeconds: number): Observable<WidgetData> {
    const existingTask = this.tasks.get(widgetId);
    
    if (existingTask) {
      if (existingTask.interval === intervalSeconds) {
        return existingTask.observable;
      }
      this.stop(widgetId);
    }

    const task = this.createTask(widgetId, config, intervalSeconds);
    this.tasks.set(widgetId, task);
    return task.observable;
  }

  private createTask(widgetId: string, config: DataSourceConfig, intervalSeconds: number): RefreshTask {
    const stop$ = new Subject<void>();
    const subject = new Subject<WidgetData>();

    const cacheKey = this.cacheService.getCacheKey(config.type, config.source, config.params);
    const cachedData = this.cacheService.get(cacheKey);

    const observable = subject.asObservable().pipe(
      shareReplay({ bufferSize: 1, refCount: false })
    );

    if (cachedData) {
      setTimeout(() => {
        subject.next({
          loading: false,
          data: cachedData,
          timestamp: Date.now()
        });
      }, 0);
    } else {
      setTimeout(() => {
        subject.next({ loading: true });
      }, 0);
    }

    if (intervalSeconds > 0) {
      timer(0, intervalSeconds * 1000).pipe(
        takeUntil(stop$),
        switchMap(() => {
          subject.next({ loading: true, data: this.cacheService.get(cacheKey) });
          return this.dataSourceService.fetchData(config);
        })
      ).subscribe({
        next: (data) => {
          this.cacheService.set(cacheKey, data, intervalSeconds * 1000 * 2);
          subject.next({
            loading: false,
            data,
            timestamp: Date.now()
          });
        },
        error: (error) => {
          subject.next({
            loading: false,
            error: error.message || 'Data fetch failed'
          });
        }
      });
    } else {
      this.dataSourceService.fetchData(config).subscribe({
        next: (data) => {
          this.cacheService.set(cacheKey, data);
          subject.next({
            loading: false,
            data,
            timestamp: Date.now()
          });
        },
        error: (error) => {
          subject.next({
            loading: false,
            error: error.message || 'Data fetch failed'
          });
        }
      });
    }

    return { subject, observable, interval: intervalSeconds, stop$, config };
  }

  refresh(widgetId: string): void {
    const task = this.tasks.get(widgetId);
    if (!task) {
      return;
    }

    task.subject.next({ loading: true });

    this.dataSourceService.fetchData(task.config).subscribe({
      next: (data) => {
        const cacheKey = this.cacheService.getCacheKey(
          task.config.type,
          task.config.source,
          task.config.params
        );
        this.cacheService.set(cacheKey, data, task.interval * 2000);
        task.subject.next({
          loading: false,
          data,
          timestamp: Date.now()
        });
      },
      error: (error) => {
        task.subject.next({
          loading: false,
          error: error.message || 'Data fetch failed'
        });
      }
    });
  }

  stop(widgetId: string): void {
    const task = this.tasks.get(widgetId);
    if (task) {
      task.stop$.next();
      task.stop$.complete();
      task.subject.complete();
      this.tasks.delete(widgetId);
    }
  }

  stopAll(): void {
    for (const widgetId of this.tasks.keys()) {
      this.stop(widgetId);
    }
  }

  setInterval(widgetId: string, intervalSeconds: number): void {
    const task = this.tasks.get(widgetId);
    if (task) {
      this.stop(widgetId);
      this.subscribe(widgetId, task.config, intervalSeconds);
    }
  }
}
