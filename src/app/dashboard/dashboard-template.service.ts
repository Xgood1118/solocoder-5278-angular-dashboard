import { Injectable } from '@angular/core';
import { DashboardTemplate } from '../core/models/dashboard.model';
import { WidgetInstance } from '../core/models/widget.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardTemplateService {
  private templates: DashboardTemplate[] = [
    {
      id: 'sales',
      name: '销售看板',
      description: '聚焦销售数据，包含GMV、订单、转化漏斗等核心指标',
      columns: 4,
      roles: ['admin', 'operation', 'sales'],
      widgets: [
        {
          id: 't1-w1',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: 'GMV',
            subtitle: '总交易额',
            dataSource: { type: 'mock', source: 'kpi-gmv' },
            refreshInterval: 30
          }
        },
        {
          id: 't1-w2',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '订单数',
            subtitle: '有效订单',
            dataSource: { type: 'mock', source: 'kpi-orders' },
            refreshInterval: 30
          }
        },
        {
          id: 't1-w3',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '营收',
            subtitle: '净利润',
            dataSource: { type: 'mock', source: 'kpi-revenue' },
            refreshInterval: 60
          }
        },
        {
          id: 't1-w4',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '用户数',
            subtitle: '付费用户',
            dataSource: { type: 'mock', source: 'kpi-users' },
            refreshInterval: 60
          }
        },
        {
          id: 't1-w5',
          type: 'line',
          colSpan: 2,
          rowSpan: 2,
          config: {
            title: '销售趋势',
            subtitle: '近12个月销售额与利润',
            dataSource: { type: 'mock', source: 'line-sales' },
            refreshInterval: 60,
            smooth: true,
            areaStyle: true
          }
        },
        {
          id: 't1-w6',
          type: 'funnel',
          colSpan: 1,
          rowSpan: 2,
          config: {
            title: '转化漏斗',
            dataSource: { type: 'mock', source: 'funnel-conversion' },
            refreshInterval: 120
          }
        },
        {
          id: 't1-w7',
          type: 'pie',
          colSpan: 1,
          rowSpan: 2,
          config: {
            title: '品类占比',
            dataSource: { type: 'mock', source: 'pie-category' },
            refreshInterval: 120,
            ring: true
          }
        },
        {
          id: 't1-w8',
          type: 'bar',
          colSpan: 2,
          rowSpan: 2,
          config: {
            title: '品类销量排行',
            dataSource: { type: 'mock', source: 'bar-category' },
            refreshInterval: 120
          }
        },
        {
          id: 't1-w9',
          type: 'table',
          colSpan: 2,
          rowSpan: 2,
          config: {
            title: '热销订单',
            dataSource: { type: 'mock', source: 'table-orders' },
            refreshInterval: 0
          }
        }
      ]
    },
    {
      id: 'operation',
      name: '运营监控',
      description: '运营数据监控，包含用户、工单、消息等运营指标',
      columns: 4,
      roles: ['admin', 'operation', 'service'],
      widgets: [
        {
          id: 't2-w1',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '活跃用户',
            subtitle: '日活',
            dataSource: { type: 'mock', source: 'kpi-users' },
            refreshInterval: 10
          }
        },
        {
          id: 't2-w2',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '工单数',
            subtitle: '待处理',
            dataSource: { type: 'mock', source: 'kpi-tickets' },
            refreshInterval: 10,
            alert: { enabled: true, operator: '>', threshold: 5000, sound: true, notification: true }
          }
        },
        {
          id: 't2-w3',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '订单数',
            subtitle: '今日',
            dataSource: { type: 'mock', source: 'kpi-orders' },
            refreshInterval: 30
          }
        },
        {
          id: 't2-w4',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: 'GMV',
            subtitle: '今日',
            dataSource: { type: 'mock', source: 'kpi-gmv' },
            refreshInterval: 30
          }
        },
        {
          id: 't2-w5',
          type: 'line',
          colSpan: 2,
          rowSpan: 2,
          config: {
            title: '用户增长趋势',
            dataSource: { type: 'mock', source: 'line-sales' },
            refreshInterval: 60
          }
        },
        {
          id: 't2-w6',
          type: 'list',
          colSpan: 1,
          rowSpan: 2,
          config: {
            title: '系统消息',
            dataSource: { type: 'mock', source: 'list-news' },
            refreshInterval: 30
          }
        },
        {
          id: 't2-w7',
          type: 'table',
          colSpan: 2,
          rowSpan: 2,
          config: {
            title: '工单列表',
            dataSource: { type: 'mock', source: 'table-orders' },
            refreshInterval: 60
          }
        },
        {
          id: 't2-w8',
          type: 'bar',
          colSpan: 1,
          rowSpan: 2,
          config: {
            title: '工单分类',
            dataSource: { type: 'mock', source: 'bar-category' },
            refreshInterval: 120
          }
        }
      ]
    },
    {
      id: 'risk',
      name: '风控大盘',
      description: '风险控制大盘，监控异常数据和风险指标',
      columns: 4,
      roles: ['admin', 'risk', 'finance'],
      widgets: [
        {
          id: 't3-w1',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '风险订单',
            subtitle: '今日',
            dataSource: { type: 'mock', source: 'kpi-orders' },
            refreshInterval: 10,
            alert: { enabled: true, operator: '>', threshold: 80000, sound: true }
          }
        },
        {
          id: 't3-w2',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '异常交易',
            subtitle: '待审核',
            dataSource: { type: 'mock', source: 'kpi-tickets' },
            refreshInterval: 10,
            alert: { enabled: true, operator: '>', threshold: 4000 }
          }
        },
        {
          id: 't3-w3',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '风险率',
            subtitle: '今日风险占比',
            dataSource: { type: 'mock', source: 'kpi-gmv' },
            refreshInterval: 30
          }
        },
        {
          id: 't3-w4',
          type: 'kpi',
          colSpan: 1,
          rowSpan: 1,
          config: {
            title: '拦截金额',
            subtitle: '累计',
            dataSource: { type: 'mock', source: 'kpi-revenue' },
            refreshInterval: 60
          }
        },
        {
          id: 't3-w5',
          type: 'line',
          colSpan: 2,
          rowSpan: 2,
          config: {
            title: '风险趋势',
            subtitle: '近30天风险事件趋势',
            dataSource: { type: 'mock', source: 'line-sales' },
            refreshInterval: 60
          }
        },
        {
          id: 't3-w6',
          type: 'radar',
          colSpan: 1,
          rowSpan: 2,
          config: {
            title: '风险维度评估',
            dataSource: { type: 'mock', source: 'radar-performance' },
            refreshInterval: 300
          }
        },
        {
          id: 't3-w7',
          type: 'heatmap',
          colSpan: 2,
          rowSpan: 2,
          config: {
            title: '风险热力分布',
            dataSource: { type: 'mock', source: 'heatmap-weekly' },
            refreshInterval: 300
          }
        },
        {
          id: 't3-w8',
          type: 'table',
          colSpan: 1,
          rowSpan: 2,
          config: {
            title: '风险事件',
            dataSource: { type: 'mock', source: 'table-orders' },
            refreshInterval: 30
          }
        }
      ]
    }
  ];

  getTemplates(): DashboardTemplate[] {
    return this.templates;
  }

  getTemplateById(id: string): DashboardTemplate | undefined {
    return this.templates.find(t => t.id === id);
  }

  getAvailableTemplates(roles: string[]): DashboardTemplate[] {
    return this.templates.filter(t => {
      if (!t.roles || t.roles.length === 0) {
        return true;
      }
      return t.roles.some(r => roles.includes(r));
    });
  }
}
