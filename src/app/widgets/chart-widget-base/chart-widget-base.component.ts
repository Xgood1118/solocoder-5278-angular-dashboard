import { Directive, ElementRef, OnDestroy, OnInit, Input, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { WidgetBaseComponent } from '../widget-base/widget-base.component';
import { RefreshSchedulerService } from '../../data/refresh-scheduler.service';
import { AlertService } from '../../core/services/alert.service';
import { ThemeService } from '../../core/services/theme.service';
import { Subscription } from 'rxjs';

@Directive()
export abstract class ChartWidgetBaseComponent extends WidgetBaseComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() chartId!: string;
  @ViewChild('chartContainer') chartContainerRef!: ElementRef;

  protected chartInstance: echarts.ECharts | null = null;
  protected themeSubscription?: Subscription;
  protected resizeObserver?: ResizeObserver;
  protected isLargeData = false;
  protected viewInitialized = false;

  constructor(
    protected elementRef: ElementRef,
    protected themeService: ThemeService,
    refreshScheduler: RefreshSchedulerService,
    alertService: AlertService,
    cdr: ChangeDetectorRef
  ) {
    super(refreshScheduler, alertService, cdr);
  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    if (this.widgetData.data) {
      this.initChart();
      this.updateChart(this.widgetData.data);
    }
  }

  override ngOnInit(): void {
    super.ngOnInit();
    
    this.themeSubscription = this.themeService.config$.subscribe(() => {
      this.updateChartTheme();
    });
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.themeSubscription?.unsubscribe();
    this.disposeChart();
    this.resizeObserver?.disconnect();
  }

  protected initChart(): void {
    if (this.chartInstance || !this.chartContainerRef) {
      return;
    }

    const theme = this.themeService.getConfig().mode === 'dark' ? 'dark' : undefined;
    const container = this.chartContainerRef.nativeElement as HTMLElement;
    this.chartInstance = echarts.init(container, theme, {
      renderer: 'canvas'
    });

    this.setupResizeObserver();
  }

  private setupResizeObserver(): void {
    if (typeof ResizeObserver !== 'undefined' && this.chartContainerRef) {
      this.resizeObserver = new ResizeObserver(() => {
        this.chartInstance?.resize();
      });
      this.resizeObserver.observe(this.chartContainerRef.nativeElement);
    }
  }

  private updateChartTheme(): void {
    if (!this.chartInstance || !this.chartContainerRef) {
      return;
    }

    const option = this.chartInstance.getOption();
    const theme = this.themeService.getConfig().mode === 'dark' ? 'dark' : undefined;
    
    this.disposeChart();
    this.chartInstance = echarts.init(this.chartContainerRef.nativeElement, theme, {
      renderer: 'canvas'
    });
    
    if (option) {
      this.chartInstance.setOption(option);
    }
  }

  protected abstract getOption(data: any): echarts.EChartsOption;

  protected updateChart(data: any): void {
    if (!this.chartInstance) {
      this.initChart();
    }

    if (this.chartInstance && data) {
      const option = this.getOption(data);
      this.chartInstance.setOption(option, { notMerge: true });
    }
  }

  protected disposeChart(): void {
    if (this.chartInstance) {
      echarts.dispose(this.chartInstance);
      this.chartInstance = null;
    }
  }

  getDataUrl(): string {
    return this.chartInstance?.getDataURL({
      type: 'png',
      pixelRatio: 2,
      backgroundColor: '#fff'
    }) || '';
  }

  protected checkLargeData(data: any[], threshold: number = 10000): boolean {
    return data && data.length > threshold;
  }

  getExportData(): any {
    return this.widgetData.data;
  }

  getChartInstance(): echarts.ECharts | null {
    return this.chartInstance;
  }
}
