import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  
  constructor(private router: Router) { }
  value: String;

  ngOnInit(): void {}

  find(): void {
    console.log('val = ',this.value)
    this.router.navigate(['find'])
  }
}
