import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";
import { CommunicationComponent } from "./communication/communication.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: TodoComponent,
  },
  {
    path: "communication",
    component: CommunicationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
