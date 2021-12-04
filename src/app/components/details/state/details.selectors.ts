import { createFeatureSelector, createSelector } from "@ngrx/store"
import { DetailsState } from "./details.reducer"

export const selectPokemon = createSelector(
    createFeatureSelector('detailsContext'),
    (state: DetailsState) => state.selectedPkm
)
export const selectEvo = createSelector(
    createFeatureSelector('detailsContext'),
    (state: DetailsState) => state.evo
)
export const selectInfo = createSelector(
    createFeatureSelector('detailsContext'),
    (state: DetailsState) => state.info
)
export const selectSuccess = createSelector(
    createFeatureSelector('detailsContext'),
    (state: DetailsState) => state.isSuccess
)