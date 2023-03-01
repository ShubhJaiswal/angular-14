import { createSelector, State } from '@ngrx/store';
import { AppState } from './reducers/index';
import { heroState } from './heros.reducer';

export const selectHeroState = (state: any) => state.heros;

export const selectHerosList = createSelector(
  selectHeroState,
  (state: heroState) => {
    
    return state.heros
  } 
);
