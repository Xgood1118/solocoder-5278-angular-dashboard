import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { DashboardTemplateService } from './dashboard-template.service';
import { AuthService } from '../core/services/auth.service';
import { ThemeService } from '../core/services/theme.service';
import { ExportService } from '../export/export.service';
import { ThemeMode, ThemeDensity, AccentColor } from '../core/models/theme.model';
import { DashboardLayout, DashboardTemplate } from '../core/models/dashboard.model';
import { WidgetType } from '../core/models/widget.model';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('dashboardContent') dashboardContent!: ElementRef;

  activeLayout?: DashboardLayout;
  layouts: DashboardLayout[] = [];
  templates: DashboardTemplate[] = [];
  themeMode: ThemeMode = 'light';
  themeDensity: ThemeDensity = 'comfortable';
  accentColor: AccentColor = 'blue';
  currentUser = this.authService.getCurrentUser();
  mockUsers = this.authService.getMockUsers();
  isEditMode = false;

  private subscriptions: Subscription[] = [];

  readonly widgetTypes: { type: WidgetType; label: string; icon: string }[] = [
    { type: 'kpi', label: 'KPI数字卡', icon: 'dashboard' },
    { type: 'line', label: '折线图', icon: 'line-chart' },
    { type: 'bar', label: '柱状图', icon: 'bar-chart' },
    { type: 'pie', label: '饼图', icon: 'pie-chart' },
    { type: 'radar', label: '雷达图', icon: 'radar-chart' },
    { type: 'funnel', label: '漏斗图', icon: 'funnel-plot' },
    { type: 'heatmap', label: '热力图', icon: 'heat-map' },
    { type: 'table', label: '表格卡', icon: 'table' },
    { type: 'list', label: '列表卡', icon: 'unordered-list' },
    { type: 'richtext', label: '富文本卡', icon: 'file-text' }
  ];

  readonly refreshOptions = [
    { value: 0, label: '不刷新' },
    { value: 10, label: '10秒' },
    { value: 30, label: '30秒' },
    { value: 60, label: '1分钟' },
    { value: 300, label: '5分钟' }
  ];

  readonly accentColors: { value: AccentColor; color: string }[] = [
    { value: 'blue', color: '#1890ff' },
    { value: 'green', color: '#52c41a' },
    { value: 'purple', color: '#722ed1' },
    { value: 'orange', color: '#fa8c16' }
  ];

  get currentAccentColor(): string {
    const found = this.accentColors.find(c => c.value === this.accentColor);
    return found ? found.color : '#1890ff';
  }

  constructor(
    private dashboardService: DashboardService,
    private dashboardTemplateService: DashboardTemplateService,
    private authService: AuthService,
    private themeService: ThemeService,
    private exportService: ExportService,
    private modal: NzModalService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const themeConfig = this.themeService.getConfig();
    this.themeMode = themeConfig.mode;
    this.themeDensity = themeConfig.density;
    this.accentColor = themeConfig.accent;

    this.subscriptions.push(
      this.dashboardService.layouts$.subscribe(layouts => {
        this.layouts = layouts;
        this.cdr.markForCheck();
      }),
      this.dashboardService.activeLayout$.subscribe(() => {
        this.activeLayout = this.dashboardService.getActiveLayout();
        this.cdr.markForCheck();
      }),
      this.authService.user$.subscribe(user => {
        this.currentUser = user;
        this.templates = this.dashboardTemplateService.getAvailableTemplates(
          user?.roles?.map(r => r) || []
        );
        this.cdr.markForCheck();
      })
    );

    this.templates = this.dashboardTemplateService.getAvailableTemplates(
      this.currentUser?.roles?.map(r => r) || []
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  selectLayout(id: string): void {
    this.dashboardService.setActiveLayout(id);
  }

  addWidget(type: WidgetType): void {
    const activeId = this.dashboardService.getActiveLayoutId();
    this.dashboardService.addWidget(activeId, type);
  }

  removeWidget(widgetId: string): void {
    const activeId = this.dashboardService.getActiveLayoutId();
    this.dashboardService.removeWidget(activeId, widgetId);
  }

  configWidget(widgetId: string): void {
    this.modal.info({
      nzTitle: '卡片设置',
      nzContent: '卡片设置功能开发中...',
      nzOkText: '确定'
    });
  }

  exportWidget(widgetId: string): void {
    this.modal.info({
      nzTitle: '导出',
      nzContent: '单卡片导出功能开发中...',
      nzOkText: '确定'
    });
  }

  onDrop(event: any): void {
    if (!this.activeLayout) return;
    const activeId = this.activeLayout.id;
    this.dashboardService.reorderWidgets(activeId, event.previousIndex, event.currentIndex);
  }

  toggleTheme(): void {
    this.themeMode = this.themeService.toggleMode();
  }

  setDensity(density: ThemeDensity): void {
    this.themeDensity = density;
    this.themeService.setDensity(density);
  }

  setAccent(color: AccentColor): void {
    this.accentColor = color;
    this.themeService.setAccent(color);
  }

  switchUser(userId: string): void {
    this.authService.login(userId);
  }

  exportDashboardPdf(): void {
    if (this.dashboardContent) {
      this.exportService.exportToPdf(this.dashboardContent.nativeElement, 'dashboard');
    }
  }

  applyTemplate(templateId: string): void {
    const template = this.dashboardTemplateService.getTemplateById(templateId);
    if (template && this.activeLayout) {
      this.modal.confirm({
        nzTitle: '应用模板',
        nzContent: `确定要应用"${template.name}"模板吗？当前布局将被替换。`,
        nzOkText: '确定',
        nzCancelText: '取消',
        nzOnOk: () => {
          if (this.activeLayout) {
            this.dashboardService.applyTemplate(this.activeLayout.id, template);
          }
        }
      });
    }
  }

  createNewLayout(): void {
    this.modal.confirm({
      nzTitle: '新建仪表盘',
      nzContent: '输入新仪表盘名称：',
      nzOkText: '创建',
      nzCancelText: '取消',
      nzOnOk: () => {
        const newLayout = this.dashboardService.createLayout('新仪表盘');
        this.dashboardService.setActiveLayout(newLayout.id);
      }
    });
  }

  refreshAll(): void {
    // 触发所有卡片刷新
    window.location.reload();
  }

  trackById(index: number, item: any): string {
    return item.id;
  }
}
