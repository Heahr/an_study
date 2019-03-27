import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user.module';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //@Input() users: User[];
  private _users: User[];

  cntAdmin: number;
  cntDeveloper: number;
  cntDesigner: number;

  @Input() 
  set users(users: User[]) {
    if(!users) { return; }

    this.cntAdmin = users.filter(({role}) => role === 'Administrator').length;
    this.cntDeveloper = users.filter(({role}) => role === 'Developer').length;
    this.cntDesigner = users.filter(({role}) => role === 'Designer').length;
    this._users = users;
  }

  get users(): User[] {
    return this._users;
  }

  constructor() { }

  ngOnInit() {
  }

}
