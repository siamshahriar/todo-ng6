import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { CommunicationComponent } from "./communication/communication.component";
import { AppRoutingModule } from "./app.routing";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Person1Component } from './communication/person1/person1.component';
import { Person2Component } from './communication/person2/person2.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CommunicationComponent,
    NavbarComponent,
    Person1Component,
    Person2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
