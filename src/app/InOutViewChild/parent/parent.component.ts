import { Component, OnInit, ViewChild } from "@angular/core";
import { Child2Component } from "../child2/child2.component";

interface employee {
  name: string;
  age: number;
  designation: string;
}

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
  @ViewChild(Child2Component) child2Component!: Child2Component;
  shortListed: employee[] = [];

  employees: employee[] = [
    { name: "Siam", age: 27, designation: "Trainee" },
    { name: "Sakib", age: 30, designation: "Developer" },
    { name: "Shakib", age: 32, designation: "Manager" },
  ];

  constructor() {}

  ngOnInit() {}

  getShortlisted(event: employee) {
    // this.shortListed.push(event);
    this.shortListed = [...this.shortListed, event];
  }

  removeFromShortList(index: number) {
    if (index > -1 && index < this.shortListed.length) {
      const updatedList = [...this.shortListed];
      updatedList.splice(index, 1);
      this.shortListed = updatedList;
    }
  }

  callChildFunction() {
    if (this.child2Component) {
      this.child2Component.changeMessage();
    } else {
      console.error("Child component is not available");
    }
  }
}
