import { Component, OnInit } from "@angular/core";
import * as $ from 'jquery';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  navigateTo(to:string,duration:number) {
      $('html, body').animate({
          scrollTop: $('#'+to).offset().top
      }, duration);
  }

  

  ngOnInit() {}
}
