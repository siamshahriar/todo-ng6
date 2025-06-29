import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPageComponent } from "./login-page/login-page.component";
import { UsersService } from "../services/users.service";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  imports: [CommonModule, LoginRoutingModule],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
  providers: [UsersService],
})
export class LoginModule {}
