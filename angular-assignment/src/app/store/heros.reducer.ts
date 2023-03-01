import { Action, createReducer, on } from '@ngrx/store';

import * as heroActions from './heros.actions';

import { HeroList } from '../models/hero.interface';
export const herosFeatureKey = 'heros';

export interface heroState {
  heros: HeroList[],
  error: string
}

export const initialState: heroState = {
  heros: [],
  error: ''
};

export const heroReducer = createReducer(
  initialState,

  on(heroActions.loadHeross, (state) => {
    
    return {...state } 
  }),

  on(heroActions.loadHerossSuccess, (state, { heroDetails }) => {
    
    return ({ ...state, heros: heroDetails })
  }),

  on(heroActions.loadHerossFailure, (state) => {
    
    return {...state, error: state.error}
  })

);
