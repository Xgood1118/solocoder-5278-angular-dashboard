import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';
import { RefreshSchedulerService } from '../../data/refresh-scheduler.service';
import { AlertService } from '../../core/services/alert.service';

@Component({
  selector: 'app-list-widget',
  templateUrl: './list-widget.component.html',
  styleUrls: ['./list-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListWidgetComponent extends WidgetBaseComponent {
  constructor(
    refreshScheduler: RefreshSchedulerService,
    alertService: AlertService,
    cdr: ChangeDetectorRef
  ) {
    super(refreshScheduler, alertService, cdr);
  }

  getTypeIcon(type: string): string {
    const icons: Record<string, string> = {
      info: 'info-circle',
      success: 'check-circle',
      warning: 'warning',
      error: 'close-circle'
    };
    return icons[type] || 'info-circle';
  }

  getTypeClass(type: string): string {
    return `item-${type || 'info'}`;
  }

  getExportData(): any {
    return this.widgetData.data;
  }
}
