import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipsModule } from './tooltip/tooltip.module';
import { CardComponent } from './components/card/card.component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    PokemonListComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TooltipsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
