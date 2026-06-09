import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AlertConfig } from '../models/widget.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private triggeredAlerts = new Set<string>();
  private audioContext: AudioContext | null = null;

  constructor(private notification: NzNotificationService) {}

  checkAlert(widgetId: string, config: AlertConfig | undefined, value: number): boolean {
    if (!config || !config.enabled) {
      return false;
    }

    const isTriggered = this.evaluateCondition(value, config.operator, config.threshold);

    if (isTriggered && !this.triggeredAlerts.has(widgetId)) {
      this.triggeredAlerts.add(widgetId);
      this.triggerAlert(widgetId, config, value);
    } else if (!isTriggered && this.triggeredAlerts.has(widgetId)) {
      this.triggeredAlerts.delete(widgetId);
    }

    return isTriggered;
  }

  private evaluateCondition(value: number, operator: string, threshold: number): boolean {
    switch (operator) {
      case '>':
        return value > threshold;
      case '<':
        return value < threshold;
      case '>=':
        return value >= threshold;
      case '<=':
        return value <= threshold;
      case '==':
        return value === threshold;
      default:
        return false;
    }
  }

  private triggerAlert(widgetId: string, config: AlertConfig, value: number): void {
    if (config.notification !== false) {
      this.showNotification(widgetId, value, config.threshold);
    }

    if (config.sound) {
      this.playAlertSound();
    }
  }

  private showNotification(widgetId: string, value: number, threshold: number): void {
    this.notification.error(
      '数据预警',
      `指标 ${value} 超出阈值 ${threshold}，请关注！`,
      { nzDuration: 5000 }
    );
  }

  private playAlertSound(): void {
    try {
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = this.audioContext;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.value = 800;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.5);
    } catch (e) {
      console.warn('Failed to play alert sound', e);
    }
  }

  isAlertTriggered(widgetId: string): boolean {
    return this.triggeredAlerts.has(widgetId);
  }

  clearAlert(widgetId: string): void {
    this.triggeredAlerts.delete(widgetId);
  }

  clearAll(): void {
    this.triggeredAlerts.clear();
  }
}
