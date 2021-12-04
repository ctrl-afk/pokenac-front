import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { EvolutionService } from "../../service/evolution.service";
import { InformationService } from "../../service/information.service";
import { PokemonService } from "../../service/pokemon.service";
import * as fromDetailsActions from './details.actions'
import { Evo } from "../../model/evo";
import { Info } from "../../model/info";
import { Pokemon } from "../../model/pokemon";

@Injectable()
export class DetailsEffects {
    getEvo$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromDetailsActions.getEvo),
            mergeMap(({evo_id}) => this.evoService.get(evo_id)
                .pipe(
                    map((evo: Evo) => fromDetailsActions.getEvoSuccess({ evo })),
                    catchError(() => of(fromDetailsActions.failureToGetEvo()))
                )),
        ),
    );

    getInfo$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromDetailsActions.getInfo),
            mergeMap(({info_id}) => this.infoService.get(info_id)
                .pipe(
                    map((info: Info) => fromDetailsActions.getInfoSuccess({ info })),
                    catchError(() => of(fromDetailsActions.failureToGetPokemon()))
                ))
        ))

    getPkm$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromDetailsActions.getPokemon),
            mergeMap(({pkm_id}) => this.pokemonService.get(pkm_id)
                .pipe(
                    map((pkm: Pokemon) => fromDetailsActions.getPokemonSuccess({ pkm })),
                    catchError(() => of(fromDetailsActions.failureToGetPokemon()))
                ))
        ))


    constructor(private actions$ : Actions,
                private pokemonService: PokemonService,
                private infoService: InformationService,
                private evoService: EvolutionService) {}
}