import { Component } from '@angular/core';

export interface Todo {
  id: number;
  content: string;
  complete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [
    {id: 1, content: 'HTML', complete: false},
    {id: 2, content: 'CSS', complete: true},
    {id: 3, content: 'Javascript', complete: false},
  ];

  add(content: string) {
    this.todos = [...this.todos, {id: this.getNextId(), content, complete: false }];
  }

  complete(id: number) {
    this.todos = this.todos.map(
      todo => todo.id === id ? ({...todo, complete: !todo.complete }) : todo
    );
  }

  private getNextId(): number {
    return !this.todos.length ? 1 : Math.max(...this.todos.map(({id}) => id)) + 1;
  }

  constructor() {
  }
}
