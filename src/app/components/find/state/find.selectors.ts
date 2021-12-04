import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FindState } from "./find.reducer";

export const selectRes = createSelector(
    createFeatureSelector('findContext'),
    (state: FindState) => state.res
)