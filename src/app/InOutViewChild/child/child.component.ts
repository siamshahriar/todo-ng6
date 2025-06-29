import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

interface employee {
  name: string;
  age: number;
  designation: string;
}

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  @Input() employee: { name: string; age: number; designation: string };
  @Input() shortListed: employee[] = [];
  @Output() shortListClicked = new EventEmitter<employee>();

  isShortListed: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.isShortListed = this.shortListed.some(
      (emp) =>
        emp.name === this.employee.name &&
        emp.age === this.employee.age &&
        emp.designation === this.employee.designation
    );
  }

  setShortListed() {
    this.shortListClicked.emit(this.employee);
  }
}
