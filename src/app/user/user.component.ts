import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [
      { id: 1, name: 'User-1' },
      { id: 2, name: 'User-2' }
    ]
  }

}
