import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import {
  DashboardOutline,
  PlusOutline,
  ReloadOutline,
  ExportOutline,
  FilePdfOutline,
  FileExcelOutline,
  PictureOutline,
  ColumnHeightOutline,
  DownOutline,
  MoreOutline,
  DragOutline,
  SettingOutline,
  DeleteOutline,
  WarningOutline,
  BulbFill,
  BulbOutline,
  UserOutline,
  MenuOutline,
  CloseOutline,
  CheckOutline,
  ClockCircleOutline,
  BellOutline,
  SearchOutline,
  HomeOutline,
  BarChartOutline,
  PieChartOutline,
  LineChartOutline,
  FundOutline,
  TableOutline,
  UnorderedListOutline,
  FileTextOutline,
  AlertOutline,
  InfoCircleOutline,
  CheckCircleOutline,
  CloseCircleOutline,
  LeftOutline,
  RightOutline,
  UpOutline,
  ArrowUpOutline,
  ArrowDownOutline,
  RiseOutline,
  FallOutline,
  RadarChartOutline,
  FunnelPlotOutline,
  HeatMapOutline,
  DownCircleOutline,
  UpCircleOutline,
  DoubleLeftOutline,
  DoubleRightOutline,
  VerticalLeftOutline,
  VerticalRightOutline,
  CaretUpOutline,
  CaretDownOutline,
  CaretLeftOutline,
  CaretRightOutline,
  LoadingOutline,
  QuestionCircleOutline,
  ExclamationCircleOutline
} from '@ant-design/icons-angular/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(zh);

const icons = [
  DashboardOutline,
  PlusOutline,
  ReloadOutline,
  ExportOutline,
  FilePdfOutline,
  FileExcelOutline,
  PictureOutline,
  ColumnHeightOutline,
  DownOutline,
  MoreOutline,
  DragOutline,
  SettingOutline,
  DeleteOutline,
  WarningOutline,
  BulbFill,
  BulbOutline,
  UserOutline,
  MenuOutline,
  CloseOutline,
  CheckOutline,
  ClockCircleOutline,
  BellOutline,
  SearchOutline,
  HomeOutline,
  BarChartOutline,
  PieChartOutline,
  LineChartOutline,
  FundOutline,
  TableOutline,
  UnorderedListOutline,
  FileTextOutline,
  AlertOutline,
  InfoCircleOutline,
  CheckCircleOutline,
  CloseCircleOutline,
  LeftOutline,
  RightOutline,
  UpOutline,
  ArrowUpOutline,
  ArrowDownOutline,
  RiseOutline,
  FallOutline,
  RadarChartOutline,
  FunnelPlotOutline,
  HeatMapOutline,
  DownCircleOutline,
  UpCircleOutline,
  DoubleLeftOutline,
  DoubleRightOutline,
  VerticalLeftOutline,
  VerticalRightOutline,
  CaretUpOutline,
  CaretDownOutline,
  CaretLeftOutline,
  CaretRightOutline,
  LoadingOutline,
  QuestionCircleOutline,
  ExclamationCircleOutline
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
