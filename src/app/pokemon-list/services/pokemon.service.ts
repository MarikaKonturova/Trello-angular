import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, forkJoin, map, switchMap, tap } from 'rxjs'
import { Pokemon } from 'src/app/core/models/pokemon.model'
import { PokemonList } from 'src/app/core/models/pokemonList.model'

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/'
  countPokemons$ = new BehaviorSubject<number>(0)
  countPokemons$$ = this.countPokemons$.asObservable()
  constructor(private http: HttpClient) {}
  getPokemonList(offset: number, limit = 20) {
    return this.http.get<any>(`${this.baseUrl}pokemon?&limit=${limit}&offset=${offset}`).pipe(
      tap(res => this.countPokemons$.next(res.count)),
      map((data: any) => data.results),
      switchMap((res: { url: string; name: string }[]) => {
        return forkJoin(res.map(({ name }) => this.getPokemonCard(name)))
      })
    )
  }
  getPokemonCard(pokemon: number | string) {
    return this.http.get<Pokemon>(`${this.baseUrl}pokemon/${pokemon}`).pipe(
      map(res => {
        return {
          ...res,
          src: `https://projectpokemon.org/images/normal-sprite/${res.name}.gif`,
        }
      })
    )
  }
}
