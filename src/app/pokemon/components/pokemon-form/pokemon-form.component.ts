import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { Pokemon } from '../../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;

  types: string[];
  isAddForm: boolean;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add')
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (!isChecked) {
      const index = this.pokemon.types.indexOf(type);
      return this.pokemon.types.splice(index, 1);
    }
    return this.pokemon.types.push(type);
  }
  isTypesValid(type: string): boolean {
    return !(this.pokemon.types.length == 1 && this.hasType(type));
  }

  onSubmit() {
    if(this.isAddForm){
      this.pokemonService.addPokemon(this.pokemon).subscribe(() => {
        this.router.navigate(['/pokemons'])
      })
    } else {
      this.pokemonService.updatePokemon(this.pokemon).subscribe(() => {
        this.router.navigate(['/pokemon', this.pokemon.id])
      })
    }
  }
}
