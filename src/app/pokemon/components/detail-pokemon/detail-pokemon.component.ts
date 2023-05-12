import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from 'src/app/pokemon/mock-pokemon-list';
import { Pokemon } from 'src/app/pokemon/pokemon';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon?: Pokemon;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}
  ngOnInit() {
    const pokemonId: string | null = this.router.snapshot.paramMap.get('id');

    if (pokemonId) {
      //console.log(this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon)
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon)
    }
  }
  goDelete(pokemon: Pokemon){
    this.pokemonService.deletePokemon(pokemon.id).subscribe(() => this.route.navigate([`pokemons`]))
  }
  goBack() {
    this.route.navigate(['/pokemons']);
  }
  goEdit(pokemon: Pokemon) {
    this.route.navigate([`edit/pokemon/`, this.pokemon?.id]);
  }
}
