import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  
  display: boolean = false;

  ngOnInit(): void {}

  goHome(){
    this.router.navigate([''])
  }

  search(){ this.display = !this.display; }
}
