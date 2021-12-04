import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.reducer";

export const selectPokedex = createSelector(
    createFeatureSelector('pkmContext'), 
    (state:AppState) => state.pokedex
);

export const selectPokemon = createSelector(
    createFeatureSelector('pkmContext'), 
    (state:AppState) => state.selectedPkm
);

export const selectPage = createSelector(
    createFeatureSelector('pkmContext'), 
    (state:AppState) => state.page
);
