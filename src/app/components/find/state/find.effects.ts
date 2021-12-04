import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { PokemonService } from "../../service/pokemon.service";
import * as fromFindActions from './find.actions'
import { Pokemon } from "../../model/pokemon";

@Injectable()
export class FindEffects {
    getPkm$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromFindActions.getPokemonByName),
            mergeMap(({name}) => this.pokemonService.getByName(name)
                .pipe(
                    map((res: Pokemon[]) => fromFindActions.getByNameSuccess({ res })),
                    catchError(() => of(fromFindActions.failureToGetByName()))
                ))
        ))


    constructor(private actions$ : Actions,
                private pokemonService: PokemonService) {}
}