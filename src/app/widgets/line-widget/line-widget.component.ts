import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ChartWidgetBaseComponent } from '../chart-widget-base/chart-widget-base.component';
import { RefreshSchedulerService } from '../../data/refresh-scheduler.service';
import { AlertService } from '../../core/services/alert.service';
import { ThemeService } from '../../core/services/theme.service';
import * as echarts from 'echarts';

@Component({
  selector: 'app-line-widget',
  templateUrl: './line-widget.component.html',
  styleUrls: ['./line-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineWidgetComponent extends ChartWidgetBaseComponent {
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
    const series = data.series.map((s: any, index: number) => ({
      name: s.name,
      type: 'line',
      data: s.data,
      smooth: this.config['smooth'] !== false,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: {
        width: 2
      },
      areaStyle: this.config['areaStyle'] ? {
        opacity: 0.1
      } : undefined,
      large: this.isLargeData
    }));

    const isLarge = data.series?.some((s: any) => s.data?.length > 10000);
    this.isLargeData = isLarge;

    return {
      tooltip: {
        trigger: 'axis',
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
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.xAxis,
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
        type: 'value',
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#f0f0f0',
            type: 'dashed'
          }
        },
        axisLabel: {
          color: '#8c8c8c'
        }
      },
      series,
      dataset: isLarge ? {
        source: []
      } : undefined
    };
  }
}
