import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  emailText = "";
  nameText = "";

  emailInvalid: boolean;
  nameInvalid: boolean;

  constructor() {}

  requestContact(email, name) {
    if (!name.invalid && !email.invalid) {
      console.log(this.emailText);
      console.log(this.nameText);
      return;
    }

    if (name.invalid) {
      this.nameInvalid = true;
    }

    if (email.invalid) {
      this.emailInvalid = true;
    }
  }

  ngOnInit() {}
}
