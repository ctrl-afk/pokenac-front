import { createAction, props } from "@ngrx/store";
import { Evo } from "../../model/evo";
import { Info } from "../../model/info";
import { Pokemon } from "../../model/pokemon";


export const getEvo = createAction(
    '[Details] Get evo',
    props<{ evo_id: number }>()
);

export const getInfo = createAction(
    '[Details] Get info',
    props<{ info_id: number }>()
);

export const getPokemon = createAction(
    '[Details] Get pokemon',
    props<{ pkm_id: number }>()
);

export const failureToGetEvo = createAction(
    '[Service] Failure to get evo'
);

export const failureToGetInfo = createAction(
    '[Service] Failure to get info'
);

export const failureToGetPokemon = createAction(
    '[Service] Failure to get pokemon'
);

export const getEvoSuccess = createAction(
    '[Service] Get evo success',
    props<{ evo: Evo }>()
);

export const getInfoSuccess = createAction(
    '[Service] Get info success',
    props<{ info: Info }>()
);

export const getPokemonSuccess = createAction(
    '[Service] Get pokemon success',
    props<{ pkm: Pokemon }>()
);

export const selectPkm = createAction(
    '[Card] Select pokemon',
    props<{ pkm: Pokemon }>()
);