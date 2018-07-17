import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  navigateTo(to: string, duration: number) {
    if (to === "contact") {
      $("html, body").animate(
        {
          scrollTop: $("#" + "footer").offset().top
        },
        1000
      );
      return;
    }
    $("html, body").animate(
      {
        scrollTop: $("#" + to).offset().top
      },
      duration
    );
  }

  ngOnInit() {}
}
