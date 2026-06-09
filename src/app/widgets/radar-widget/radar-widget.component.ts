import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ChartWidgetBaseComponent } from '../chart-widget-base/chart-widget-base.component';
import { RefreshSchedulerService } from '../../data/refresh-scheduler.service';
import { AlertService } from '../../core/services/alert.service';
import { ThemeService } from '../../core/services/theme.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-radar-widget',
  templateUrl: './radar-widget.component.html',
  styleUrls: ['./radar-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadarWidgetComponent extends ChartWidgetBaseComponent {
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
    return {
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        textStyle: {
          color: '#262626'
        }
      },
      legend: {
        data: data.series.map((s: any) => s.name),
        top: 0,
        right: 0
      },
      radar: {
        indicator: data.indicators,
        shape: 'polygon',
        splitNumber: 4,
        axisName: {
          color: '#595959',
          fontSize: 12
        },
        splitLine: {
          lineStyle: {
            color: '#e8e8e8'
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['#fafafa', '#fff']
          }
        },
        axisLine: {
          lineStyle: {
            color: '#d9d9d9'
          }
        }
      },
      series: [
        {
          type: 'radar',
          data: data.series.map((s: any) => ({
            value: s.value,
            name: s.name,
            areaStyle: {
              opacity: 0.2
            },
            lineStyle: {
              width: 2
            }
          }))
        }
      ]
    };
  }
}
