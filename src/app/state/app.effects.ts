import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators'
import { Pokemon } from "../components/model/pokemon";
import { PokemonService } from "../components/service/pokemon.service";
import * as fromAppActions from '../state/app.actions'
import * as fromAppSelectors from '../state/app.selectors'
import { AppState } from "./app.reducer";

@Injectable()
export class AppEffect {
    catchPokedex = createEffect( () => this.actions$
        .pipe(
            ofType(fromAppActions.catchPokedex),
            withLatestFrom(this.store.select(fromAppSelectors.selectPage)),
            mergeMap( ([,page]) => this.pokemonService.getAll(page)
                .pipe(
                    map( (pkms:Pokemon[]) => fromAppActions.storePokemon( {pkms} ) ),
                    catchError( () => of( fromAppActions.catchPokemonErro() ) )
                ) 
            ),
        ), 
    );
    constructor(private actions$: Actions,
                private store: Store<AppState>,
                private pokemonService: PokemonService){}
}