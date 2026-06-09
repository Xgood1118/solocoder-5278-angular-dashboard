import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DashboardLayout, DashboardTemplate } from '../core/models/dashboard.model';
import { WidgetType, WidgetInstance } from '../core/models/widget.model';

const STORAGE_KEY = 'dashboard_layouts';
const ACTIVE_KEY = 'dashboard_active_id';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private layoutsSubject = new BehaviorSubject<DashboardLayout[]>([]);
  private activeLayoutSubject = new BehaviorSubject<string>('default');

  layouts$: Observable<DashboardLayout[]> = this.layoutsSubject.asObservable();
  activeLayout$: Observable<string> = this.activeLayoutSubject.asObservable();

  constructor() {
    this.loadLayouts();
  }

  private loadLayouts(): void {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        this.layoutsSubject.next(JSON.parse(saved));
      } else {
        this.createDefaultLayout();
      }

      const activeId = localStorage.getItem(ACTIVE_KEY);
      if (activeId) {
        this.activeLayoutSubject.next(activeId);
      }
    } catch (e) {
      console.warn('Failed to load dashboard layouts');
      this.createDefaultLayout();
    }
  }

  private saveLayouts(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.layoutsSubject.value));
    } catch (e) {
      console.warn('Failed to save dashboard layouts');
    }
  }

  private createDefaultLayout(): void {
    const defaultLayout: DashboardLayout = {
      id: 'default',
      name: '我的仪表盘',
      columns: 4,
      widgets: [
        {
          id: 'widget-1',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: 'GMV',
            subtitle: '总交易额',
            dataSource: { type: 'mock', source: 'kpi-gmv' },
            refreshInterval: 30,
            alert: { enabled: false, operator: '>', threshold: 20000000 }
          }
        },
        {
          id: 'widget-2',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '订单数',
            subtitle: '今日订单',
            dataSource: { type: 'mock', source: 'kpi-orders' },
            refreshInterval: 30,
            roles: ['admin', 'operation']
          }
        },
        {
          id: 'widget-3',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '用户数',
            subtitle: '活跃用户',
            dataSource: { type: 'mock', source: 'kpi-users' },
            refreshInterval: 60,
            roles: ['admin', 'operation']
          }
        },
        {
          id: 'widget-4',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '工单数',
            subtitle: '待处理',
            dataSource: { type: 'mock', source: 'kpi-tickets' },
            refreshInterval: 10,
            alert: { enabled: true, operator: '>', threshold: 5000, sound: true },
            roles: ['admin', 'service']
          }
        },
        {
          id: 'widget-5',
          type: 'line',
          colSpan: 2,
          rowSpan: 2,
          config: {
            title: '销售趋势',
            subtitle: '近12个月',
            dataSource: { type: 'mock', source: 'line-sales' },
            refreshInterval: 60,
            smooth: true,
            areaStyle: true
          }
        },
        {
          id: 'widget-6',
          type: 'bar',
          colSpan: 1,
          rowSpan: 2,
          config: {
            title: '品类销量',
            dataSource: { type: 'mock', source: 'bar-category' },
            refreshInterval: 120
          }
        },
        {
          id: 'widget-7',
          type: 'pie',
          colSpan: 1,
          rowSpan: 2,
          config: {
            title: '销售占比',
            dataSource: { type: 'mock', source: 'pie-category' },
            refreshInterval: 120,
            ring: true,
            legendPosition: 'bottom'
          }
        },
        {
          id: 'widget-8',
          type: 'table',
          colSpan: 2,
          rowSpan: 2,
          config: {
            title: '最近订单',
            dataSource: { type: 'mock', source: 'table-orders' },
            refreshInterval: 0,
            roles: ['admin', 'operation', 'service']
          }
        },
        {
          id: 'widget-9',
          type: 'list',
          colSpan: 1,
          rowSpan: 2,
          config: {
            title: '最新消息',
            dataSource: { type: 'mock', source: 'list-news' },
            refreshInterval: 30
          }
        },
        {
          id: 'widget-10',
          type: 'funnel',
          colSpan: 1,
          rowSpan: 2,
          config: {
            title: '转化漏斗',
            dataSource: { type: 'mock', source: 'funnel-conversion' },
            refreshInterval: 60,
            roles: ['admin', 'operation']
          }
        },
        {
          id: 'widget-11',
          type: 'radar',
          colSpan: 1,
          rowSpan: 2,
          config: {
            title: '综合能力评估',
            dataSource: { type: 'mock', source: 'radar-performance' },
            refreshInterval: 300
          }
        },
        {
          id: 'widget-12',
          type: 'heatmap',
          colSpan: 2,
          rowSpan: 2,
          config: {
            title: '访问热力图',
            subtitle: '按周/时段分布',
            dataSource: { type: 'mock', source: 'heatmap-weekly' },
            refreshInterval: 300
          }
        }
      ],
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    this.layoutsSubject.next([defaultLayout]);
    this.saveLayouts();
  }

  getLayouts(): DashboardLayout[] {
    return this.layoutsSubject.value;
  }

  getActiveLayout(): DashboardLayout | undefined {
    const activeId = this.activeLayoutSubject.value;
    return this.layoutsSubject.value.find(l => l.id === activeId);
  }

  getActiveLayoutId(): string {
    return this.activeLayoutSubject.value;
  }

  setActiveLayout(id: string): void {
    this.activeLayoutSubject.next(id);
    localStorage.setItem(ACTIVE_KEY, id);
  }

  addWidget(layoutId: string, type: WidgetType, config?: any): void {
    const layouts = [...this.layoutsSubject.value];
    const layoutIndex = layouts.findIndex(l => l.id === layoutId);

    if (layoutIndex === -1) return;

    const newWidget: WidgetInstance = {
      id: `widget-${Date.now()}`,
      type,
      colSpan: 1,
      rowSpan: 1,
      config: {
        title: `新${type}卡片`,
        dataSource: { type: 'mock', source: this.getDefaultDataSource(type) },
        refreshInterval: 60,
        ...config
      }
    };

    layouts[layoutIndex] = {
      ...layouts[layoutIndex],
      widgets: [...layouts[layoutIndex].widgets, newWidget],
      updatedAt: Date.now()
    };

    this.layoutsSubject.next(layouts);
    this.saveLayouts();
  }

  removeWidget(layoutId: string, widgetId: string): void {
    const layouts = [...this.layoutsSubject.value];
    const layoutIndex = layouts.findIndex(l => l.id === layoutId);

    if (layoutIndex === -1) return;

    layouts[layoutIndex] = {
      ...layouts[layoutIndex],
      widgets: layouts[layoutIndex].widgets.filter(w => w.id !== widgetId),
      updatedAt: Date.now()
    };

    this.layoutsSubject.next(layouts);
    this.saveLayouts();
  }

  updateWidget(layoutId: string, widgetId: string, updates: Partial<WidgetInstance>): void {
    const layouts = [...this.layoutsSubject.value];
    const layoutIndex = layouts.findIndex(l => l.id === layoutId);

    if (layoutIndex === -1) return;

    const widgets = [...layouts[layoutIndex].widgets];
    const widgetIndex = widgets.findIndex(w => w.id === widgetId);

    if (widgetIndex === -1) return;

    widgets[widgetIndex] = { ...widgets[widgetIndex], ...updates };

    layouts[layoutIndex] = {
      ...layouts[layoutIndex],
      widgets,
      updatedAt: Date.now()
    };

    this.layoutsSubject.next(layouts);
    this.saveLayouts();
  }

  reorderWidgets(layoutId: string, fromIndex: number, toIndex: number): void {
    const layouts = [...this.layoutsSubject.value];
    const layoutIndex = layouts.findIndex(l => l.id === layoutId);

    if (layoutIndex === -1) return;

    const widgets = [...layouts[layoutIndex].widgets];
    const [removed] = widgets.splice(fromIndex, 1);
    widgets.splice(toIndex, 0, removed);

    layouts[layoutIndex] = {
      ...layouts[layoutIndex],
      widgets,
      updatedAt: Date.now()
    };

    this.layoutsSubject.next(layouts);
    this.saveLayouts();
  }

  createLayout(name: string, template?: DashboardTemplate): DashboardLayout {
    const newLayout: DashboardLayout = {
      id: `layout-${Date.now()}`,
      name,
      columns: template?.columns || 4,
      widgets: template?.widgets.map(w => ({ ...w, id: `widget-${Date.now()}-${Math.random().toString(36).substr(2, 9)}` })) || [],
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    const layouts = [...this.layoutsSubject.value, newLayout];
    this.layoutsSubject.next(layouts);
    this.saveLayouts();

    return newLayout;
  }

  deleteLayout(id: string): void {
    if (id === 'default') return;

    const layouts = this.layoutsSubject.value.filter(l => l.id !== id);
    this.layoutsSubject.next(layouts);
    this.saveLayouts();

    if (this.activeLayoutSubject.value === id) {
      this.setActiveLayout('default');
    }
  }

  renameLayout(id: string, name: string): void {
    const layouts = [...this.layoutsSubject.value];
    const layoutIndex = layouts.findIndex(l => l.id === id);

    if (layoutIndex === -1) return;

    layouts[layoutIndex] = { ...layouts[layoutIndex], name, updatedAt: Date.now() };
    this.layoutsSubject.next(layouts);
    this.saveLayouts();
  }

  applyTemplate(layoutId: string, template: DashboardTemplate): void {
    const layouts = [...this.layoutsSubject.value];
    const layoutIndex = layouts.findIndex(l => l.id === layoutId);

    if (layoutIndex === -1) return;

    layouts[layoutIndex] = {
      ...layouts[layoutIndex],
      columns: template.columns,
      widgets: template.widgets.map(w => ({
        ...w,
        id: `widget-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      })),
      updatedAt: Date.now()
    };

    this.layoutsSubject.next(layouts);
    this.saveLayouts();
  }

  private getDefaultDataSource(type: WidgetType): string {
    const sources: Record<WidgetType, string> = {
      kpi: 'kpi-gmv',
      line: 'line-sales',
      bar: 'bar-category',
      pie: 'pie-category',
      scatter: 'line-sales',
      radar: 'radar-performance',
      funnel: 'funnel-conversion',
      heatmap: 'heatmap-weekly',
      map: 'map-china',
      table: 'table-orders',
      list: 'list-news',
      richtext: ''
    };
    return sources[type] || '';
  }
}
