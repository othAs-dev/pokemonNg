import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipsModule } from './tooltip/tooltip.module';
import { TooltipsDirective } from './tooltip/tooltips.directive';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, TooltipsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
