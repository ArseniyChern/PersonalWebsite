import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./home/header/header.component";
import { ToolsComponent } from "./home/tools/tools.component";
import { ContactComponent } from "./home/contact/contact.component";
import { FooterComponent } from "./home/footer/footer.component";
import { AboutComponent } from "./home/about/about.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ToolsComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
