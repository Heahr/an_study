import { Component, OnInit, Input } from '@angular/core';
import { Checkbox } from '../app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() checkbox: Checkbox;

  constructor() { }

  ngOnInit() {
  }
}
