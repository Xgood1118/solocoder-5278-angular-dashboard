import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ChangeDetectorRef,
  Type
} from '@angular/core';
import { WidgetInstance, WidgetType } from '../../core/models/widget.model';
import { KpiWidgetComponent } from '../kpi-widget/kpi-widget.component';
import { LineWidgetComponent } from '../line-widget/line-widget.component';
import { BarWidgetComponent } from '../bar-widget/bar-widget.component';
import { PieWidgetComponent } from '../pie-widget/pie-widget.component';
import { TableWidgetComponent } from '../table-widget/table-widget.component';
import { ListWidgetComponent } from '../list-widget/list-widget.component';
import { RichtextWidgetComponent } from '../richtext-widget/richtext-widget.component';
import { RadarWidgetComponent } from '../radar-widget/radar-widget.component';
import { FunnelWidgetComponent } from '../funnel-widget/funnel-widget.component';
import { HeatmapWidgetComponent } from '../heatmap-widget/heatmap-widget.component';
import { AlertService } from '../../core/services/alert.service';

const widgetComponents: Record<WidgetType, Type<any>> = {
  kpi: KpiWidgetComponent,
  line: LineWidgetComponent,
  bar: BarWidgetComponent,
  pie: PieWidgetComponent,
  scatter: LineWidgetComponent,
  radar: RadarWidgetComponent,
  funnel: FunnelWidgetComponent,
  heatmap: HeatmapWidgetComponent,
  map: PieWidgetComponent,
  table: TableWidgetComponent,
  list: ListWidgetComponent,
  richtext: RichtextWidgetComponent
};

@Component({
  selector: 'app-widget-host',
  templateUrl: './widget-host.component.html',
  styleUrls: ['./widget-host.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetHostComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() widget!: WidgetInstance;
  @Input() isDragging = false;
  @Output() remove = new EventEmitter<string>();
  @Output() config = new EventEmitter<string>();
  @Output() export = new EventEmitter<string>();

  @ViewChild('widgetContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  isAlertTriggered = false;
  showMenu = false;

  private componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.isAlertTriggered = this.alertService.isAlertTriggered(this.widget.id);
  }

  ngAfterViewInit(): void {
    this.createComponent();
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private createComponent(): void {
    const componentType = widgetComponents[this.widget.type];
    if (!componentType) {
      console.warn(`Unknown widget type: ${this.widget.type}`);
      return;
    }

    const factory = this.resolver.resolveComponentFactory(componentType);
    this.componentRef = this.container.createComponent(factory);
    
    const instance = this.componentRef.instance;
    instance.widgetId = this.widget.id;
    instance.config = this.widget.config;
    
    this.cdr.detectChanges();
  }

  onRefresh(): void {
    if (this.componentRef?.instance?.refresh) {
      this.componentRef.instance.refresh();
    }
  }

  onRemove(): void {
    this.remove.emit(this.widget.id);
  }

  onConfig(): void {
    this.config.emit(this.widget.id);
  }

  onExport(): void {
    this.export.emit(this.widget.id);
  }

  getWidgetComponent(): any {
    return this.componentRef?.instance;
  }
}
