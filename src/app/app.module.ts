import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { CommunicationComponent } from "./communication/communication.component";
import { AppRoutingModule } from "./app.routing";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Person1Component } from "./communication/person1/person1.component";
import { Person2Component } from "./communication/person2/person2.component";
import { ParentComponent } from "./InOutViewChild/parent/parent.component";
import { ChildComponent } from "./InOutViewChild/child/child.component";
import { Child2Component } from "./InOutViewChild/child2/child2.component";
import { DynamicRoutingComponent } from "./dynamic-routing/dynamic-routing.component";
import { DynamicUsersComponent } from "./dynamic-users/dynamic-users.component";
import { UsersService } from "./services/users.service";
import { Error404pageComponent } from "./shared/error404page/error404page.component";
import { LoginModule } from "./login/login.module";
import { ReportsModule } from "./reports/reports.module";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CommunicationComponent,
    NavbarComponent,
    Person1Component,
    Person2Component,
    ParentComponent,
    ChildComponent,
    Child2Component,
    DynamicRoutingComponent,
    DynamicUsersComponent,
    Error404pageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    ReportsModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
