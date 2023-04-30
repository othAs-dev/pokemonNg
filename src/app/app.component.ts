import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );
    if (!pokemon) {
      console.error("ca n'existe pas");
      this.pokemonSelected = pokemon;
    } else {
      console.log(`vous avez choisi ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }
  }
  handleClick(pokemonName?: string) {
    alert(`Tu as choisi ${pokemonName}`);
  }
}
