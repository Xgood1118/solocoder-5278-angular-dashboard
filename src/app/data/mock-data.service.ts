import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private dataSets: Record<string, any> = {
    'kpi-gmv': { value: 12586320, trend: 12.5, label: 'GMV' },
    'kpi-orders': { value: 85642, trend: -3.2, label: '订单数' },
    'kpi-users': { value: 156328, trend: 8.7, label: '用户数' },
    'kpi-tickets': { value: 3256, trend: 15.3, label: '工单数' },
    'kpi-revenue': { value: 3589620, trend: 22.1, label: '营收' },

    'line-sales': {
      xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      series: [
        { name: '销售额', data: [820, 932, 901, 934, 1290, 1330, 1320, 1450, 1520, 1680, 1790, 1890] },
        { name: '利润', data: [200, 250, 220, 280, 350, 400, 380, 420, 480, 520, 580, 620] }
      ]
    },

    'bar-category': {
      xAxis: ['电子产品', '服装', '食品', '家居', '美妆', '运动', '图书', '母婴'],
      series: [
        { name: '销量', data: [320, 280, 450, 230, 380, 190, 310, 270] }
      ]
    },

    'pie-category': {
      data: [
        { value: 335, name: '电子产品' },
        { value: 310, name: '服装' },
        { value: 234, name: '食品' },
        { value: 135, name: '家居' },
        { value: 148, name: '美妆' },
        { value: 200, name: '其他' }
      ]
    },

    'table-orders': {
      columns: ['订单号', '客户', '金额', '状态', '时间'],
      data: [
        ['ORD001', '张三', 1299, '已完成', '2024-01-15 10:30'],
        ['ORD002', '李四', 599, '处理中', '2024-01-15 11:20'],
        ['ORD003', '王五', 2499, '已完成', '2024-01-15 12:10'],
        ['ORD004', '赵六', 899, '待发货', '2024-01-15 13:45'],
        ['ORD005', '钱七', 1599, '已完成', '2024-01-15 14:30'],
        ['ORD006', '孙八', 399, '已取消', '2024-01-15 15:20'],
        ['ORD007', '周九', 2199, '处理中', '2024-01-15 16:10'],
        ['ORD008', '吴十', 799, '已完成', '2024-01-15 17:00']
      ]
    },

    'list-news': {
      items: [
        { title: '系统升级通知', time: '10分钟前', type: 'info' },
        { title: '新功能上线：智能报表', time: '1小时前', type: 'success' },
        { title: '数据同步异常警告', time: '2小时前', type: 'warning' },
        { title: '月度运营报告已生成', time: '3小时前', type: 'info' },
        { title: '客服满意度创新高', time: '5小时前', type: 'success' }
      ]
    },

    'funnel-conversion': {
      data: [
        { value: 10000, name: '访问' },
        { value: 6000, name: '注册' },
        { value: 3000, name: '下单' },
        { value: 2000, name: '支付' },
        { value: 1500, name: '复购' }
      ]
    },

    'radar-performance': {
      indicators: [
        { name: '销售能力', max: 100 },
        { name: '客户服务', max: 100 },
        { name: '产品质量', max: 100 },
        { name: '物流速度', max: 100 },
        { name: '价格优势', max: 100 },
        { name: '品牌影响力', max: 100 }
      ],
      series: [
        { name: '本月', value: [85, 78, 92, 76, 68, 82] },
        { name: '上月', value: [78, 72, 88, 70, 75, 78] }
      ]
    },

    'heatmap-weekly': {
      xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      yAxis: ['0-6', '6-12', '12-18', '18-24'],
      data: [
        [0, 0, 10], [1, 0, 8], [2, 0, 12], [3, 0, 9], [4, 0, 15], [5, 0, 25], [6, 0, 30],
        [0, 1, 50], [1, 1, 60], [2, 1, 55], [3, 1, 70], [4, 1, 80], [5, 1, 90], [6, 1, 75],
        [0, 2, 80], [1, 2, 90], [2, 2, 100], [3, 2, 85], [4, 2, 95], [5, 2, 110], [6, 2, 100],
        [0, 3, 60], [1, 3, 55], [2, 3, 70], [3, 3, 65], [4, 3, 75], [5, 3, 85], [6, 3, 80]
      ]
    },

    'map-china': {
      data: [
        { name: '北京', value: 12580 },
        { name: '上海', value: 15630 },
        { name: '广东', value: 18920 },
        { name: '江苏', value: 9870 },
        { name: '浙江', value: 8560 },
        { name: '四川', value: 6540 },
        { name: '山东', value: 7890 },
        { name: '河南', value: 5630 },
        { name: '湖北', value: 6780 },
        { name: '福建', value: 5430 }
      ]
    }
  };

  getData(source: string): Observable<any> {
    const data = this.dataSets[source] || this.generateRandomData(source);
    const delayMs = 200 + Math.random() * 500;
    return of(this.mutateData(data)).pipe(delay(delayMs));
  }

  private mutateData(data: any): any {
    if (data && typeof data.value === 'number') {
      const change = (Math.random() - 0.5) * 0.1 * data.value;
      return { ...data, value: Math.round(data.value + change) };
    }
    if (data && data.series && Array.isArray(data.series)) {
      return {
        ...data,
        series: data.series.map((s: any) => ({
          ...s,
          data: s.data.map((v: number) => Math.round(v + (Math.random() - 0.5) * v * 0.05))
        }))
      };
    }
    return data;
  }

  private generateRandomData(source: string): any {
    console.warn(`Mock data not found for source: ${source}, generating random data`);
    return { value: Math.floor(Math.random() * 10000) };
  }

  getAvailableSources(): string[] {
    return Object.keys(this.dataSets);
  }
}
