import { Component, OnInit } from "@angular/core";
import { RequestContactService } from "./request-contact.service";

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  stagger,
  query
} from "@angular/animations";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
  animations: [
    trigger("formState", [
      state(
        "pre-submit",
        style({
          height: "*"
        })
      ),
      state(
        "post-submit",
        style({
          height: 0
        })
      ),
      transition("element-clicked => post-submit", [
        query("@elementState", [
          stagger(0, [
            animate(
              "500ms",
              keyframes([
                style({ opacity: 1 }),
                style({ opacity: 0, display: "none" })
              ])
            )
          ])
        ]),
        animate(
          "250ms 500ms",
          keyframes([style({ height: "*" }), style({ height: 0 })])
        )
      ]),
      transition("pre-submit => element-clicked", [
        query("@buttonState", [
          stagger(0, [
            animate(
              "500ms",
              keyframes([
                style({ opacity: 1 }),
                style({ opacity: 0, display: "none" })
              ])
            )
          ])
        ])
      ])
    ]),
    trigger("elementState", [
      state(
        "pre-submit",
        style({
          opacity: 1
        })
      ),
      state(
        "post-submit",
        style({
          opacity: 0,
          display: "none"
        })
      ),
      transition("pre-submit => post-submit", [query(":self", [])])
    ]),
    trigger("buttonState", [
      state(
        "false",
        style({
          opacity: 1
        })
      ),
      state(
        "true",
        style({
          opacity: 0,
          visibility: "hidden"
        })
      ),
      transition("false => true", [query(":self", [])])
    ])
  ]
})
export class ContactComponent implements OnInit {
  emailText = "";
  nameText = "";

  emailInvalid: boolean;
  nameInvalid: boolean;

  requestError: boolean;

  public formState = "pre-submit";
  public elementState = "pre-submit";
  public buttonState = false;

  constructor(private _requestContactService: RequestContactService) {}

  requestContact(email, name) {
    this.requestError = false;
    if (!this.buttonState) {
      if (!name.invalid && !email.invalid) {
        this.buttonState = true;
        this.formState = "element-clicked";
        this._requestContactService
          .makeRequest(name.value, email.value)
          .subscribe(
            res => {
              setTimeout(function() {
                document.getElementById("contactForm").style.display = "none";
                document.getElementById("skipMumboButton").style.display =
                  "none";
              }, 1000);
              setTimeout(function() {
                document.getElementById("formContainer").style.display = "none";
              }, 1500);

              this.elementState = "post-submit";
              this.formState = "post-submit";
              console.log(res);
            },
            err => {
              this.buttonState = false;
              this.formState = "pre-submit";
              this.onError();
              console.log(err);
            }
          );
        return;
      }

      if (name.invalid) {
        this.nameInvalid = true;
      }

      if (email.invalid) {
        this.emailInvalid = true;
      }
    }
  }

  ngOnInit() {}

  onError() {
    this.requestError = true;
  }
}
