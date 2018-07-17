import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Values } from "./values";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RequestContactService {
  constructor(private _http: HttpClient) {}

  makeRequest(name: string, email: string): Observable<string> {
    const url =
      Values.WEBSITE_URL +
      ":" +
      Values.WEBSITE_PORT +
      Values.REQUEST_CONTACT_PATH;

    console.log(url);

    const postData = new FormData();
    postData.append("name", name);
    postData.append("email", email);

    return this._http.post<string>(url, postData);
  }
}
