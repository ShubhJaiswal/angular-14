import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HerosEffects } from './heros.effects';

describe('HerosEffects', () => {
  let actions$: Observable<any>;
  let effects: HerosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HerosEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(HerosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
