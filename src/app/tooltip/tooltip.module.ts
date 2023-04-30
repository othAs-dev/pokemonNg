import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipsDirective } from './tooltips.directive';

@NgModule({
  declarations: [TooltipComponent, TooltipsDirective],
  imports: [CommonModule],
  exports: [TooltipsDirective],
})
export class TooltipsModule {}
