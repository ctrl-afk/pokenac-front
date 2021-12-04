import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.sass']
})
export class Error404Component implements OnInit {
 
  @Input()
  id: Number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
