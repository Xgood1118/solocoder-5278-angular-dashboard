import { Directive, Input, OnDestroy, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { WidgetConfig, WidgetData, RefreshInterval } from '../../core/models/widget.model';
import { RefreshSchedulerService } from '../../data/refresh-scheduler.service';
import { AlertService } from '../../core/services/alert.service';

@Directive()
export abstract class WidgetBaseComponent implements OnInit, OnDestroy {
  @Input() widgetId!: string;
  @Input() config!: WidgetConfig;

  widgetData: WidgetData = { loading: true };
  isAlertTriggered = false;

  protected dataSubscription?: Subscription;

  constructor(
    protected refreshScheduler: RefreshSchedulerService,
    protected alertService: AlertService,
    protected cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscribeData();
  }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
    this.refreshScheduler.stop(this.widgetId);
  }

  private subscribeData(): void {
    if (!this.config.dataSource) {
      this.widgetData = { loading: false, data: null };
      return;
    }

    const interval = (this.config.refreshInterval || 0) as RefreshInterval;
    
    this.dataSubscription = this.refreshScheduler.subscribe(
      this.widgetId,
      this.config.dataSource,
      interval
    ).subscribe(data => {
      this.widgetData = data;
      this.onDataUpdate(data);
      this.checkAlert(data);
      this.cdr.markForCheck();
    });
  }

  protected onDataUpdate(data: WidgetData): void {
  }

  private checkAlert(data: WidgetData): void {
    if (!data.data || !this.config.alert?.enabled) {
      this.isAlertTriggered = false;
      return;
    }

    const alertField = this.config.alert.field || 'value';
    const value = this.getAlertValue(data.data, alertField);
    
    if (typeof value === 'number') {
      this.isAlertTriggered = this.alertService.checkAlert(
        this.widgetId,
        this.config.alert,
        value
      );
    }
  }

  protected getAlertValue(data: any, field: string): number | undefined {
    if (data && typeof data[field] === 'number') {
      return data[field];
    }
    if (data?.value !== undefined && typeof data.value === 'number') {
      return data.value;
    }
    return undefined;
  }

  refresh(): void {
    this.refreshScheduler.refresh(this.widgetId);
  }

  retry(): void {
    this.refresh();
  }

  abstract getExportData(): any;
}
