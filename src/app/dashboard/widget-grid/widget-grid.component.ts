import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { WidgetInstance, WidgetType } from '../../core/models/widget.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-widget-grid',
  templateUrl: './widget-grid.component.html',
  styleUrls: ['./widget-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetGridComponent implements OnInit, OnChanges {
  @Input() widgets: WidgetInstance[] = [];
  @Input() columns = 4;
  @Input() editable = true;
  @Output() drop = new EventEmitter<CdkDragDrop<WidgetInstance[]>>();
  @Output() removeWidget = new EventEmitter<string>();
  @Output() configWidget = new EventEmitter<string>();
  @Output() exportWidget = new EventEmitter<string>();

  visibleWidgets: WidgetInstance[] = [];

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.filterWidgets();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['widgets']) {
      this.filterWidgets();
    }
  }

  private filterWidgets(): void {
    this.visibleWidgets = this.widgets.filter(w => {
      if (!w.config.roles || w.config.roles.length === 0) {
        return true;
      }
      return this.authService.hasAnyRole(w.config.roles);
    });
    this.cdr.markForCheck();
  }

  onDrop(event: CdkDragDrop<WidgetInstance[]>): void {
    if (event.previousIndex === event.currentIndex) {
      return;
    }
    moveItemInArray(this.visibleWidgets, event.previousIndex, event.currentIndex);
    this.drop.emit(event);
  }

  onRemove(widgetId: string): void {
    this.removeWidget.emit(widgetId);
  }

  onConfig(widgetId: string): void {
    this.configWidget.emit(widgetId);
  }

  onExport(widgetId: string): void {
    this.exportWidget.emit(widgetId);
  }

  getGridClass(): string {
    return `grid-cols-${this.columns}`;
  }

  getWidgetStyle(widget: WidgetInstance): { [key: string]: string } {
    return {
      'grid-column': `span ${widget.colSpan}`,
      'grid-row': `span ${widget.rowSpan}`
    };
  }

  trackById(index: number, widget: WidgetInstance): string {
    return widget.id;
  }
}
