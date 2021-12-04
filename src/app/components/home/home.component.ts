import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.reducer';
import { Pokemon } from '../model/pokemon';
import * as fromAppActions from '../../state/app.actions';
import * as fromAppSelectors from '../../state/app.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  lockLoad: Boolean = true;
  page: Observable<number>;
  pokemon$: Observable<Pokemon[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromAppActions.catchPokedex())
    this.pokemon$ = this.store.select(fromAppSelectors.selectPokedex)
  }

  onScroll(){
    if(!this.lockLoad){
      setTimeout(() => {
        this.store.dispatch(fromAppActions.catchPokedex())
      }, 1500) 
    }
  }

  loadMore(){
    this.lockLoad = false;
    this.store.dispatch(fromAppActions.catchPokedex())
  }
}
