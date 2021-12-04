import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { Pokemon } from "../components/model/pokemon";
import * as fromAppActions from '../state/app.actions'

export interface AppState {
    pokedex: Pokemon[];
    selectedPkm: Pokemon | undefined;
    page: number;
}

export const initialState: AppState = {
    pokedex: [],
    selectedPkm: undefined,
    page: 0
}
const appStateReducer = createReducer(
    initialState, 
    on(fromAppActions.storePokemon, (state, { pkms }) => ({
        ...state,
        pokedex: [...state.pokedex, ...pkms],
        page: 1+state.page
    })),
);

export function reducer(state: AppState | undefined, action: Action): AppState {
    return appStateReducer(state, action);
}