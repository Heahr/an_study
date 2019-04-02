import { Component, OnInit } from '@angular/core';

class User {
  constructor(
    userid: string,
    password: string,
    role: string,
    name?: string
  ) {
  }
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;
  roles: string[];

  constructor() { }

  ngOnInit() {
    this.roles = ['Admin', 'Developer', 'Guest'];
    this.initUser();
  }

  onSubmit(userForm) {
    console.log('send user to server: ', this.user);
    userForm.reset();
  }

  initUser() {
    this.user = new User('', '', this.roles[0]);
  }
}
