import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';
import { RefreshSchedulerService } from '../../data/refresh-scheduler.service';
import { AlertService } from '../../core/services/alert.service';

@Component({
  selector: 'app-table-widget',
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableWidgetComponent extends WidgetBaseComponent {
  pageSize = 5;
  pageIndex = 1;

  constructor(
    refreshScheduler: RefreshSchedulerService,
    alertService: AlertService,
    cdr: ChangeDetectorRef
  ) {
    super(refreshScheduler, alertService, cdr);
  }

  getPageData(): any[] {
    if (!this.widgetData.data?.data) return [];
    const start = (this.pageIndex - 1) * this.pageSize;
    return this.widgetData.data.data.slice(start, start + this.pageSize);
  }

  getTotal(): number {
    return this.widgetData.data?.data?.length || 0;
  }

  getExportData(): any {
    return this.widgetData.data;
  }
}
