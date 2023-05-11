import {Injectable} from '@angular/core';
import {Pokemon} from './pokemon';
import {POKEMONS} from './mock-pokemon-list';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, tap, catchError} from "rxjs";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}
  private log(res: Pokemon[] | undefined){
    console.table(res)
  }
  private handleError(err: Error, errorValue: any){
    console.error(err)
    return of(errorValue)
  }
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((res) => this.log(res)),
      catchError((error: Error) => this.handleError(error, []))
    );
  }
  getPokemonById(pokemonId: number): Observable<Pokemon| undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => console.log(pokemon)),
      catchError((error: Error) => this.handleError(error, undefined))
    );
  }
  searchPokemonList(term: string): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((res) => this.log(res)), catchError((err) => this.handleError(err, []))
    )
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders(({'Content-Type': 'application/json'}))
    };
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((res: any) => this.log(res)), catchError((err) => this.handleError(err, undefined))
    )
  }
  updatePokemon(pokemon: Pokemon): Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders(({'Content-Type': 'application/json'}))
    };
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response: any) => this.log(response)), catchError((err) => this.handleError(err, undefined))
    )
  }
  deletePokemon(pokemonId: number): Observable<void> {
    return this.http.delete<void>(`api/pokemons/${pokemonId}`).pipe(
      tap((res:any) => this.log(res)),
      catchError((err) => this.handleError(err, undefined))
    );
  }

  getPokemonTypeList(): string[] {
    return [
      ...new Set(POKEMONS.flatMap((pokemon) => pokemon.types)),
    ];
  }
}
