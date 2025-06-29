import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPageComponent } from "./login-page/login-page.component";
import { UsersService } from "../services/users.service";

@NgModule({
  imports: [CommonModule],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
  providers: [UsersService],
})
export class LoginModule {}
