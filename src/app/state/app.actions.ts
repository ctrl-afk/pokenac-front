import { createAction, props } from "@ngrx/store";
import { Pokemon } from "../components/model/pokemon";

export const catchPokedex = createAction(
    '[Home] Get Pokedex'
);

export const storePokemon= createAction(
    '[Service] Get Success',
    props<{ pkms: Pokemon[] }>()
)

export const catchPokemonErro = createAction(
    '[Service] Get Failure',
)