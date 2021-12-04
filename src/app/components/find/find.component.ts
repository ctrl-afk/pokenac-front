import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Pokemon } from '../model/pokemon';
import * as fromFindActions from './state/find.actions';
import * as fromFindSelectors from './state/find.selectors';
import { FindState } from './state/find.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.sass']
})
export class FindComponent implements OnInit {
  value: string | null;
  res$: Observable<Pokemon[]> | null;
  erro: boolean =  false;

  constructor(private router: ActivatedRoute, 
    private store: Store<FindState>) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.value = params['value'];
      //console.log(this.value);
    })
    if(this.value != null){
      
      this.store.dispatch( fromFindActions.getPokemonByName({name: this.value}) );
      setTimeout(() => {
        this.res$ = this.store.select( fromFindSelectors.selectRes);
      }, 1000)
    } else {this.erro = !this.erro;}
  }
}