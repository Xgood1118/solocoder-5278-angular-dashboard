export type ThemeMode = 'light' | 'dark';
export type ThemeDensity = 'compact' | 'comfortable';
export type AccentColor = 'blue' | 'green' | 'purple' | 'orange';

export interface ThemeConfig {
  mode: ThemeMode;
  density: ThemeDensity;
  accent: AccentColor;
}
