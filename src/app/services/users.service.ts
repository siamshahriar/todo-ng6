import { Injectable } from "@angular/core";

export class UsersService {
  users: any[] = [
    {
      name: "Brody Simon",
      email: "congue.a@hotmail.couk",
      country: "Australia",
      id: 1,
    },
    {
      name: "Kevyn Tanner",
      email: "nam.interdum.enim@hotmail.org",
      country: "Peru",
      id: 5,
    },
    {
      name: "Harper Blackwell",
      email: "felis.ullamcorper.viverra@google.couk",
      country: "New Zealand",
      id: 3,
    },
    {
      name: "Vivien Jacobson",
      email: "eu.sem.pellentesque@outlook.edu",
      country: "Peru",
      id: 4,
    },
    {
      name: "Regan Gill",
      email: "lectus@outlook.net",
      country: "Costa Rica",
      id: 10,
    },
  ];

  constructor() {}

  getUserDetails(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
