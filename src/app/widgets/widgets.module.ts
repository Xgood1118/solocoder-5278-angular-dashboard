import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { WidgetHostComponent } from './widget-host/widget-host.component';
import { KpiWidgetComponent } from './kpi-widget/kpi-widget.component';
import { LineWidgetComponent } from './line-widget/line-widget.component';
import { BarWidgetComponent } from './bar-widget/bar-widget.component';
import { PieWidgetComponent } from './pie-widget/pie-widget.component';
import { TableWidgetComponent } from './table-widget/table-widget.component';
import { ListWidgetComponent } from './list-widget/list-widget.component';
import { RichtextWidgetComponent } from './richtext-widget/richtext-widget.component';
import { RadarWidgetComponent } from './radar-widget/radar-widget.component';
import { FunnelWidgetComponent } from './funnel-widget/funnel-widget.component';
import { HeatmapWidgetComponent } from './heatmap-widget/heatmap-widget.component';

@NgModule({
  declarations: [
    WidgetHostComponent,
    KpiWidgetComponent,
    LineWidgetComponent,
    BarWidgetComponent,
    PieWidgetComponent,
    TableWidgetComponent,
    ListWidgetComponent,
    RichtextWidgetComponent,
    RadarWidgetComponent,
    FunnelWidgetComponent,
    HeatmapWidgetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NzDropDownModule,
    NzMenuModule,
    NzTableModule,
    NzPaginationModule,
    NzToolTipModule,
    DragDropModule
  ],
  exports: [
    WidgetHostComponent,
    KpiWidgetComponent,
    LineWidgetComponent,
    BarWidgetComponent,
    PieWidgetComponent,
    TableWidgetComponent,
    ListWidgetComponent,
    RichtextWidgetComponent,
    RadarWidgetComponent,
    FunnelWidgetComponent,
    HeatmapWidgetComponent
  ]
})
export class WidgetsModule { }
