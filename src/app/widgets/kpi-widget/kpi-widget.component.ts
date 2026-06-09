import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';
import { RefreshSchedulerService } from '../../data/refresh-scheduler.service';
import { AlertService } from '../../core/services/alert.service';

@Component({
  selector: 'app-kpi-widget',
  templateUrl: './kpi-widget.component.html',
  styleUrls: ['./kpi-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KpiWidgetComponent extends WidgetBaseComponent {
  displayedValue = 0;
  targetValue = 0;
  animationFrame: any;

  constructor(
    refreshScheduler: RefreshSchedulerService,
    alertService: AlertService,
    cdr: ChangeDetectorRef
  ) {
    super(refreshScheduler, alertService, cdr);
  }

  protected override onDataUpdate(data: any): void {
    if (data.data && typeof data.data.value === 'number') {
      this.animateValue(data.data.value);
    }
  }

  private animateValue(target: number): void {
    this.targetValue = target;
    const startValue = this.displayedValue;
    const diff = target - startValue;
    const duration = 800;
    const startTime = Date.now();

    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      this.displayedValue = Math.round(startValue + diff * easeProgress);
      this.cdr.markForCheck();

      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(animate);
      }
    };

    this.animationFrame = requestAnimationFrame(animate);
  }

  getTrendClass(trend: number): string {
    if (trend > 0) return 'trend-up';
    if (trend < 0) return 'trend-down';
    return '';
  }

  getAbsoluteTrend(trend: number): number {
    return Math.abs(trend);
  }

  getExportData(): any {
    return this.widgetData.data;
  }
}
