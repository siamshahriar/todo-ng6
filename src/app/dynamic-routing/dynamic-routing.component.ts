import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dynamic-routing",
  templateUrl: "./dynamic-routing.component.html",
  styleUrls: ["./dynamic-routing.component.css"],
})
export class DynamicRoutingComponent implements OnInit {
  constructor(private userService: UsersService, private router: Router) {}

  users: any[] = [];
  ngOnInit() {
    this.users = this.userService.users;
  }
}
