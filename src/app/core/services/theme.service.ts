import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeConfig, ThemeMode, ThemeDensity, AccentColor } from '../models/theme.model';

const STORAGE_KEY = 'dashboard_theme_config';

const defaultConfig: ThemeConfig = {
  mode: 'light',
  density: 'comfortable',
  accent: 'blue'
};

const accentColors: Record<AccentColor, string> = {
  blue: '#1890ff',
  green: '#52c41a',
  purple: '#722ed1',
  orange: '#fa8c16'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private configSubject = new BehaviorSubject<ThemeConfig>(defaultConfig);
  config$: Observable<ThemeConfig> = this.configSubject.asObservable();

  constructor() {
    this.loadConfig();
  }

  private loadConfig(): void {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const config = JSON.parse(saved) as ThemeConfig;
        this.configSubject.next({ ...defaultConfig, ...config });
      }
    } catch (e) {
      console.warn('Failed to load theme config');
    }
    this.applyTheme(this.configSubject.value);
  }

  private saveConfig(config: ThemeConfig): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch (e) {
      console.warn('Failed to save theme config');
    }
  }

  private applyTheme(config: ThemeConfig): void {
    const html = document.documentElement;

    html.classList.remove('theme-light', 'theme-dark');
    html.classList.add(`theme-${config.mode}`);

    html.classList.remove('density-compact', 'density-comfortable');
    html.classList.add(`density-${config.density}`);

    html.style.setProperty('--primary-color', accentColors[config.accent]);
    html.style.setProperty('--accent-color', accentColors[config.accent]);
  }

  getConfig(): ThemeConfig {
    return this.configSubject.value;
  }

  setMode(mode: ThemeMode): void {
    const config = { ...this.configSubject.value, mode };
    this.configSubject.next(config);
    this.saveConfig(config);
    this.applyTheme(config);
  }

  toggleMode(): ThemeMode {
    const current = this.configSubject.value.mode;
    const next: ThemeMode = current === 'light' ? 'dark' : 'light';
    this.setMode(next);
    return next;
  }

  setDensity(density: ThemeDensity): void {
    const config = { ...this.configSubject.value, density };
    this.configSubject.next(config);
    this.saveConfig(config);
    this.applyTheme(config);
  }

  setAccent(accent: AccentColor): void {
    const config = { ...this.configSubject.value, accent };
    this.configSubject.next(config);
    this.saveConfig(config);
    this.applyTheme(config);
  }

  getAccentColor(): string {
    return accentColors[this.configSubject.value.accent];
  }
}
