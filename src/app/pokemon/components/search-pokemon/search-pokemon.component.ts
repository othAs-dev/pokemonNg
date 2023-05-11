import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../pokemon";
import {PokemonService} from "../../pokemon.service";
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  searchTerms:Subject<string> = new Subject<string>();
  pokemons$: Observable<Pokemon[]>
  constructor(private pokemonService: PokemonService, private router: Router ) {}
  ngOnInit() {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokemonService.searchPokemonList((term)))
    )
  }
  search(term: string){
    this.searchTerms.next(term);
  }
  goToDetailPokemon(pokemon: Pokemon){
    const link: (string|number)[] = ['/pokemon', pokemon.id]
    this.router.navigate(link)
  }
}
