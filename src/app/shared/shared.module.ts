import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasRoleDirective } from './directives/has-role.directive';
import { NumberScrollPipe } from './pipes/number-scroll.pipe';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    HasRoleDirective,
    NumberScrollPipe
  ],
  imports: [
    CommonModule,
    NzSkeletonModule,
    NzButtonModule,
    NzIconModule
  ],
  exports: [
    HasRoleDirective,
    NumberScrollPipe,
    CommonModule,
    NzSkeletonModule,
    NzButtonModule,
    NzIconModule
  ]
})
export class SharedModule { }
