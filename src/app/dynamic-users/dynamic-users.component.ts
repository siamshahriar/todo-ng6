import { UsersService } from "./../services/users.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dynamic-users",
  templateUrl: "./dynamic-users.component.html",
  styleUrls: ["./dynamic-users.component.css"],
})
export class DynamicUsersComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get("id");
    if (userId) {
      this.user = this.userService.getUserDetails(+userId);
    }
  }
}
