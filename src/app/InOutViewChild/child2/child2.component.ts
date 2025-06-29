import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.css"],
})
export class Child2Component implements OnInit {
  @ViewChild("childMessage") childMessage: ElementRef;

  constructor() {}

  ngOnInit() {}

  changeMessage() {
    if (this.childMessage) {
      this.childMessage.nativeElement.textContent = "Message changed!";
      this.childMessage.nativeElement.style.color = "blue";
      this.childMessage.nativeElement.style.fontSize = "20px";
    }
  }
}
