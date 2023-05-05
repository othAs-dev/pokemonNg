import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from 'src/app/mock-pokemon-list';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon?: Pokemon;
  constructor(private route: Router, private router: ActivatedRoute) {}
  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.router.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id == +pokemonId
      );
    }
  }

  goBack() {
    this.route.navigate(['/pokemons']);
  }
}
