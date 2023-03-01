import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, of, switchMap, tap } from 'rxjs';

import { HerosService } from '../services/heros.service';
import { Hero, HeroList, HeroResponse, Planet, Species, StarWarsMovie } from '../models/hero.interface';
import { loadHeross, loadHerossFailure, loadHerossSuccess } from './heros.actions';


@Injectable()
export class HerosEffects {


  constructor(private actions$: Actions,
    private herosService: HerosService) { }

  loadHeroResources$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadHeross),
      switchMap((url: { heroUrl: string }) => {
        return this.herosService.getHeroResources<HeroResponse>(url.heroUrl).pipe(
          map((response: any) => response.results),
          tap((res) => {
            
          }),
          switchMap((heroes: Hero[]) => {
            return forkJoin(
              heroes.map((hero: Hero) => {

                return forkJoin({
                  hero: of(hero),
                  planet: this.herosService.getHeroResources<Planet>(hero.homeworld),
                  film: this.herosService.getHeroResources<StarWarsMovie>(hero.films[0]),
                  species: hero.species.length > 0 ? this.herosService.getHeroResources<Species>(hero.species[0]) : of(null),
                }).pipe(
                  map((response: any) => {

                    const heroWithDetails: HeroList = response.hero as HeroList;
                    heroWithDetails.planet = response.planet.name;
                    heroWithDetails.filmName = response.film.title;
                    heroWithDetails.filmReleaseDate = response.film.release_date;
                    // heroWithDetails.filmName = response.film.sort((a: any, b: any) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime())[0].title;

                    heroWithDetails.speciesName = response.species ? response.species.name : null;

                    return heroWithDetails;
                  })
                )
              })
            )
          })
        )
      }),
      map((heroDetails: HeroList[]) => {
        console.log('returned from effect', heroDetails);
        debugger;
        return loadHerossSuccess({ heroDetails })
      }),
      catchError((error: any) => {
        console.log('came into error', error);
        
        return of(loadHerossFailure({ error }))
      })
    )
  }
  )

}