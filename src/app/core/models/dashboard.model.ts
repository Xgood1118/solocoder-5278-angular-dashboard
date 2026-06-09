import { WidgetInstance } from './widget.model';

export interface DashboardLayout {
  id: string;
  name: string;
  columns: number;
  widgets: WidgetInstance[];
  createdAt: number;
  updatedAt: number;
}

export interface DashboardTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail?: string;
  columns: number;
  widgets: WidgetInstance[];
  roles?: string[];
}

export type TemplateType = 'sales' | 'operation' | 'risk';
