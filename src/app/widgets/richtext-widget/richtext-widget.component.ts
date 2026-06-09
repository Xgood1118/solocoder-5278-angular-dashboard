import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';
import { RefreshSchedulerService } from '../../data/refresh-scheduler.service';
import { AlertService } from '../../core/services/alert.service';

@Component({
  selector: 'app-richtext-widget',
  templateUrl: './richtext-widget.component.html',
  styleUrls: ['./richtext-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RichtextWidgetComponent extends WidgetBaseComponent implements OnInit {
  content = '';

  constructor(
    refreshScheduler: RefreshSchedulerService,
    alertService: AlertService,
    cdr: ChangeDetectorRef
  ) {
    super(refreshScheduler, alertService, cdr);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.content = this.config['content'] || '<p>暂无内容</p>';
  }

  protected override onDataUpdate(data: any): void {
    if (data.data?.content) {
      this.content = data.data.content;
    }
  }

  getExportData(): any {
    return { content: this.content };
  }
}
