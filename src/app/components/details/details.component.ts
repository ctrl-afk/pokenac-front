import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from '../model/pokemon';
import { DetailsState } from './state/details.reducer';
import * as fromDetailsActions from '../details/state/details.actions'
import * as fromDetailsSelectors from '../details/state/details.selectors'
import { Observable } from 'rxjs';
import { Info } from '../model/info';
import { Evo } from '../model/evo';
import { Chain } from '../model/chain';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  pkm: Pokemon;
  info: Info;
  evo: Evo;
  id: number;
  evoload: boolean;
  chain: Chain;
  isSuccess: Observable<boolean>;

  constructor(private store: Store<DetailsState>, private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isSuccess = this.store.select(fromDetailsSelectors.selectSuccess)
    
    this.store.dispatch(fromDetailsActions.getPokemon( {pkm_id: this.id} ))
    this.store.select(fromDetailsSelectors.selectPokemon)
      .subscribe(res => this.pkm = res)
    
    this.store.dispatch(fromDetailsActions.getInfo( {info_id: this.id} ))
    this.store.select(fromDetailsSelectors.selectInfo)
      .subscribe((res: Info) => this.info = res)
    setTimeout(() => {
      this.store.dispatch(fromDetailsActions.getEvo( {evo_id: this.info.evo_chain_id} ))
    }, 1000)
    setTimeout(() => {
      this.store.select(fromDetailsSelectors.selectEvo)
        .subscribe((res: Evo) => {
          this.evo = res
          this.evoload = Object.keys(this.evo).length != 0
          this.chain = Object(this.evo.chain)
        })
    }, 2000)
  }


  next(id: number): void {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['details', ++id])
    })
  }

  prev(id: number): void {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['details', --id])
    })
  }
}
