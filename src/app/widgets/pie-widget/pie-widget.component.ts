import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ChartWidgetBaseComponent } from '../chart-widget-base/chart-widget-base.component';
import { RefreshSchedulerService } from '../../data/refresh-scheduler.service';
import { AlertService } from '../../core/services/alert.service';
import { ThemeService } from '../../core/services/theme.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-pie-widget',
  templateUrl: './pie-widget.component.html',
  styleUrls: ['./pie-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieWidgetComponent extends ChartWidgetBaseComponent {
  constructor(
    elementRef: ElementRef,
    themeService: ThemeService,
    refreshScheduler: RefreshSchedulerService,
    alertService: AlertService,
    cdr: ChangeDetectorRef
  ) {
    super(elementRef, themeService, refreshScheduler, alertService, cdr);
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  protected override onDataUpdate(data: any): void {
    if (data.data) {
      this.updateChart(data.data);
    }
  }

  protected getOption(data: any): echarts.EChartsOption {
    const pieData = data.data || data;
    const isRing = this.config['ring'];
    const legendPos = this.config['legendPosition'];

    return {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        textStyle: {
          color: '#262626'
        }
      },
      legend: {
        orient: legendPos === 'bottom' ? 'horizontal' : 'vertical',
        left: legendPos === 'bottom' ? 'center' : 'right',
        bottom: legendPos === 'bottom' ? 0 : 'center',
        right: legendPos === 'bottom' ? undefined : 0,
        top: legendPos === 'bottom' ? undefined : 'center',
        itemGap: 12,
        textStyle: {
          color: '#595959'
        }
      },
      series: [
        {
          name: this.config.title || '数据',
          type: 'pie',
          radius: isRing ? ['45%', '70%'] : '70%',
          center: legendPos === 'bottom' ? ['50%', '45%'] : ['40%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 4,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: !isRing,
            formatter: '{b}\n{d}%',
            fontSize: 12
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 14,
              fontWeight: 'bold'
            },
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.2)'
            }
          },
          labelLine: {
            show: !isRing
          },
          data: pieData
        }
      ]
    };
  }
}
