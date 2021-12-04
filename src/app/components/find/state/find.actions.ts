import { createAction, props } from "@ngrx/store";
import { Pokemon } from "../../model/pokemon";

export const getPokemonByName = createAction(
    '[Find] Get Pokemon by name',
    props<{ name: string }>()
);

export const failureToGetByName = createAction(
    '[Find] Failure to get Pokemon by name'
);

export const getByNameSuccess = createAction(
    '[Find] Get Pokemon by name success',
    props<{ res: Pokemon[] }>()
);