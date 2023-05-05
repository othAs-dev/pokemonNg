import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from 'src/app/mock-pokemon-list';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  constructor(private router: Router) {}
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
  handleClick(pokemonId?: number) {
    console.log(pokemonId);
    this.router.navigate([`/pokemon/${pokemonId}`]);
  }
}
