import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Pokemon } from '../model/pokemon';
import * as fromDetailsActions from '../details/state/details.actions';
import { DetailsState } from '../details/state/details.reducer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input()
  pkm = new Pokemon()
  
  constructor(private router: Router, 
              private store: Store<DetailsState>) { }

  ngOnInit(): void {
  }

  detail(id:number): void {
    this.router.navigate(['details', id])
  }
}
