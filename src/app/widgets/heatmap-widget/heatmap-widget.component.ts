import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ChartWidgetBaseComponent } from '../chart-widget-base/chart-widget-base.component';
import { RefreshSchedulerService } from '../../data/refresh-scheduler.service';
import { AlertService } from '../../core/services/alert.service';
import { ThemeService } from '../../core/services/theme.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-heatmap-widget',
  templateUrl: './heatmap-widget.component.html',
  styleUrls: ['./heatmap-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeatmapWidgetComponent extends ChartWidgetBaseComponent {
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
        position: 'top',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        textStyle: {
          color: '#262626'
        },
        formatter: (params: any) => {
          return `${data.yAxis[params.value[1]]} - ${data.xAxis[params.value[0]]}<br/>数值: ${params.value[2]}`;
        }
      },
      grid: {
        left: '15%',
        right: '10%',
        top: '10%',
        bottom: '15%'
      },
      xAxis: {
        type: 'category',
        data: data.xAxis,
        splitArea: {
          show: true
        },
        axisLine: {
          lineStyle: {
            color: '#d9d9d9'
          }
        },
        axisLabel: {
          color: '#8c8c8c'
        }
      },
      yAxis: {
        type: 'category',
        data: data.yAxis,
        splitArea: {
          show: true
        },
        axisLine: {
          lineStyle: {
            color: '#d9d9d9'
          }
        },
        axisLabel: {
          color: '#8c8c8c'
        }
      },
      visualMap: {
        min: 0,
        max: this.getMaxValue(data.data),
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '0%',
        inRange: {
          color: ['#e6f7ff', '#91d5ff', '#1890ff', '#0050b3']
        },
        textStyle: {
          color: '#8c8c8c'
        }
      },
      series: [
        {
          name: '热力图',
          type: 'heatmap',
          data: data.data,
          label: {
            show: false
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          }
        }
      ]
    };
  }

  private getMaxValue(data: number[][]): number {
    let max = 0;
    for (const item of data) {
      if (item[2] > max) {
        max = item[2];
      }
    }
    return max || 100;
  }
}
