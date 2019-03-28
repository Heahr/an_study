import { Component, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child/child.component';

export interface Checkbox {
  id: number;
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkboxs: Checkbox[] = [
    {id: 1, label: 'HTML', checked: true},
    {id: 2, label: 'CSS', checked: false},
    {id: 3, label: 'JS', checked: true},
  ];

  active = false;

  @ViewChildren(ChildComponent) myChildren: QueryList<ChildComponent>;
  constructor() {
  }

  toggle() {
    this.active = !this.active;
    this.myChildren.forEach(child => child.checkbox.checked = this.active);
  }
}
