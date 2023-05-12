import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

import { CardComponent } from './components/card/card.component';
import { TooltipsModule } from './tooltip/tooltip.module';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { LoadingComponent } from './components/loading/loading.component';
import {AuthGuard} from "../auth.guard";

const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [AuthGuard] },
  {path: 'pokemon/add', component: AddPokemonComponent, canActivate: [AuthGuard]},
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    DetailPokemonComponent,
    PokemonListComponent,
    CardComponent,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes),
    TooltipsModule,
  ],
  providers: [PokemonService],
})
export class PokemonModule {}
