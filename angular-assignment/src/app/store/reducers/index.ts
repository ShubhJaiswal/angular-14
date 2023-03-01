import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromHeros from '../heros.reducer';


export interface AppState {
  [fromHeros.herosFeatureKey]: fromHeros.heroState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromHeros.herosFeatureKey]: fromHeros.heroReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
