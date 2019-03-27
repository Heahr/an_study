import { Component } from '@angular/core';
import { User } from './model/user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [
    {id: 1, name: 'Lee', role: 'Administrator'},
    {id: 2, name: 'Baek', role: 'Developer'},
    {id: 3, name: 'Park', role: 'Designer'}
  ]

  constructor() {
  }

  addUser(name: string, role: string) {
    const num: number = this.getNextId();
    if(name && role) {
      this.users = [...this.users, {id: num, name: `${name}` ,role: `${role}`}];
    }
  }

  getNextId(): number {
    return this.users.length ? Math.max(...this.users.map(({id}) => id)) + 1 : 1;
  }
}
