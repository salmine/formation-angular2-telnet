import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  // template: `<>`,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() {

    var x = 'hello';

    var y = x + 'world';
  }


  ngOnInit() {
    $("button").click(function () {
      if ($("p")) {
        $("p").hide();
      } else {

        $("body").append("<p>Test</p>");
      }
    });

  }

}