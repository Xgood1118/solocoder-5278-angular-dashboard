export type WidgetType = 'kpi' | 'line' | 'bar' | 'pie' | 'scatter' | 'radar' | 'funnel' | 'heatmap' | 'map' | 'table' | 'list' | 'richtext';

export type RefreshInterval = 0 | 10 | 30 | 60 | 120 | 300 | number;

export interface WidgetConfig {
  title?: string;
  subtitle?: string;
  dataSource?: DataSourceConfig;
  refreshInterval?: RefreshInterval;
  alert?: AlertConfig;
  roles?: string[];
  [key: string]: any;
}

export interface DataSourceConfig {
  type: 'mock' | 'api' | 'sql';
  source: string;
  params?: Record<string, any>;
}

export interface AlertConfig {
  enabled: boolean;
  field?: string;
  operator: '>' | '<' | '>=' | '<=' | '==';
  threshold: number;
  sound?: boolean;
  notification?: boolean;
}

export interface WidgetInstance {
  id: string;
  type: WidgetType;
  config: WidgetConfig;
  colSpan: number;
  rowSpan: number;
}

export interface WidgetData {
  loading: boolean;
  error?: string;
  data?: any;
  timestamp?: number;
}
