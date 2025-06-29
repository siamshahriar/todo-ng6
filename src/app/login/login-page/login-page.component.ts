import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  users: any[] = [];
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.users = this.usersService.users;
  }
}
