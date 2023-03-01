import { Component, OnInit } from '@angular/core';
import { Hero, Planet, Species, StarWarsMovie, HeroList, HeroResponse } from 'src/app/models/hero.interface';
import { HerosService } from 'src/app/services/heros.service';



import { forkJoin, Observable, throwError, of } from 'rxjs';
import { catchError, map, } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import { loadHeross } from 'src/app/store/heros.actions';
import { selectHerosList } from 'src/app/store/heros.selector';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.scss']
})
export class HerosListComponent implements OnInit {

  herosList: HeroList[] = [];
  constructor(public heroService: HerosService,
    private store: Store) { }

  ngOnInit(): void {
    
    const heroUrl = 'https://swapi.dev/api/people';

    this.store.dispatch(loadHeross({ heroUrl }));

      this.store.pipe(select(selectHerosList)).subscribe((heroDetails: any): void => {
        
        this.herosList = heroDetails;
        console.log(this.herosList)
        
      });
    }

}
