import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberScroll'
})
export class NumberScrollPipe implements PipeTransform {
  transform(value: number, decimals: number = 0, prefix: string = '', suffix: string = ''): string {
    if (value == null || isNaN(value)) {
      return '-';
    }
    const formatted = value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${prefix}${formatted}${suffix}`;
  }
}
