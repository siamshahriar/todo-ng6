import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { CommunicationComponent } from "./communication/communication.component";
import { NgModule } from "@angular/core";
import { ParentComponent } from "./InOutViewChild/parent/parent.component";
import { DynamicRoutingComponent } from "./dynamic-routing/dynamic-routing.component";
import { DynamicUsersComponent } from "./dynamic-users/dynamic-users.component";
import { Error404pageComponent } from "./shared/error404page/error404page.component";
import { LoginPageComponent } from "./login/login-page/login-page.component";

const routes: Routes = [
  {
    path: "",
    component: TodoComponent,
  },
  {
    path: "communication",
    component: CommunicationComponent,
  },
  {
    path: "inoutviewchild",
    component: ParentComponent,
  },
  {
    path: "dynamicRouting",
    component: DynamicRoutingComponent,
  },
  {
    path: "user/:id",
    component: DynamicUsersComponent,
  },
  {
    path: "login",
    // loadChildren: "./login/login.module#LoginModule", // eikhane lazy loading use kora hoyeche kintu eita korte hoile abar app.module.ts e import theke LoginModule ta bad dite hobe
    component: LoginPageComponent,
  },
  {
    path: "**",
    component: Error404pageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
