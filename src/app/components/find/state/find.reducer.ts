import { Action, createReducer, on } from "@ngrx/store";
import { Pokemon } from "../../model/pokemon";
import * as fromFindActions from './find.actions'

export interface FindState {
    res:  Pokemon[];
}

export const findInitialState: FindState = {
    res: [],
}

export const reducer = createReducer(
    findInitialState,
    on(
        fromFindActions.getByNameSuccess,
        (state, { res }) => ({
            ...state,
            res: res
        })
    )
);

export function findReducer(state: FindState | undefined, action: Action): FindState {
    return reducer(state, action);
}