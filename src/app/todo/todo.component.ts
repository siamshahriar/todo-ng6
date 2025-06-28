import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

interface User {
  name: string;
  age: number;
}

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  // Form groups
  userForm: FormGroup;
  editingUserForm: FormGroup | null = null;

  users: User[] = [
    { name: "John Doe", age: 30 },
    { name: "Jane Smith", age: 25 },
    { name: "Alice Johnson", age: 28 },
  ];

  editingIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      age: ["", [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {}

  ngDoCheck() {
    console.log(this.users);
  }

  // Add new user
  addUser() {
    console.log(this.userForm);
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset();
    }
  }

  // Start edit mode
  editUser(index: number) {
    const user = this.users[index];
    this.editingUserForm = this.fb.group({
      name: [user.name, Validators.required],
      age: [user.age, [Validators.required, Validators.min(0)]],
    });
    this.editingIndex = index;
  }

  // Save edited user
  saveUser() {
    if (this.editingUserForm.valid) {
      this.users[this.editingIndex!] = this.editingUserForm.value;
      this.editingIndex = null;
      this.editingUserForm = null;
    }
  }

  // Cancel edit
  cancelEdit() {
    this.editingIndex = null;
    this.editingUserForm = null;
  }

  // Delete user
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
