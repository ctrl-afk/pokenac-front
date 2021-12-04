import { Action, createReducer, on } from "@ngrx/store";
import { Evo } from "../../model/evo";
import { Info } from "../../model/info";
import { Pokemon } from "../../model/pokemon";
import * as fromDetailsActions from './details.actions'

export interface DetailsState {
    evo: Evo;
    info: Info;
    selectedPkm: Pokemon;
    isSuccess: boolean; 
}

export const detailsInitialState: DetailsState = {
    evo: new Evo,
    info: new Info,
    selectedPkm: new Pokemon,
    isSuccess: true,
}

export const reducer = createReducer(
    detailsInitialState,
    on(
        fromDetailsActions.getEvoSuccess,
        (state, { evo }) => ({
            ...state,
            evo: evo
        })
    ),
    on(
        fromDetailsActions.getInfoSuccess,
        (state, { info }) => ({
            ...state,
            info: info
        })
    ),
    on(
        fromDetailsActions.getPokemonSuccess,
        (state, { pkm }) => ({
            ...state,
            isSuccess: true,
            selectedPkm: pkm
        })
    ),
    on(fromDetailsActions.selectPkm, (state, { pkm }) => ({
        ...state,
        selectedPkm: pkm
    })),
    on(fromDetailsActions.failureToGetPokemon, (state) => ({
        ...state,
        isSuccess: false
    }))
);

export function detailsReducer(state: DetailsState | undefined, action: Action): DetailsState {
    return reducer(state, action);
}