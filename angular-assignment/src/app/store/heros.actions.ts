import { createAction, props } from '@ngrx/store';
import { HeroList } from '../models/hero.interface';

export const loadHeross = createAction(
  '[Heros] Heros Heross',
  props<{ heroUrl: string }>()
);

export const loadHerossSuccess = createAction(
  '[Heros] Heros Heross Success',
  props<{ heroDetails: HeroList[] }>()
);

export const loadHerossFailure = createAction(
  '[Heros] Heros Heross Failure',
  props<{ error: any }>()
);
