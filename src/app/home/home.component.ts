import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
 // template: `<>`,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

     var x     =  'hello';

     var y = x + 'world';
   }

 
  ngOnInit() {
  }

}
