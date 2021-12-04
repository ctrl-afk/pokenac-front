import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DetailsState } from '../details/state/details.reducer';
import * as fromDetailsActions from '../details/state/details.actions';

@Component({
  selector: 'app-evo',
  templateUrl: './evo.component.html',
  styleUrls: ['./evo.component.sass']
})
export class EvoComponent implements OnInit {
  @Input()
  chain: Object;
  id: number;
  name: string;
  evolves_to: Object[];
  img: string;
  
  constructor(private router: Router, 
    private store: Store<DetailsState>) { }

  ngOnInit(): void {
    this.id = Object(this.chain).id
    this.name = Object(this.chain).name
    this.evolves_to = Object(this.chain).evolves_to
    this.img = this.getImg(this.id)
  }

  getImg(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }

  detail(id:number): void {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['details', id])
    })
  }

}
