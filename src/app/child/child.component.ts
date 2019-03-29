import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input() prop: string;
  @Input() immutable: string;
  @Input() mutable: object;
  pro = 'normal prop';

  constructor() {
    console.log('[constructor]');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[OnChange]');
    console.log(`changes:`, changes);
    console.log(`immutable: ${this.immutable}`);
    console.log(`mutable:`, this.mutable);
  }

  ngOnInit() {
    console.log(`[OnInit]`);
    console.log(`prop: ${this.prop}`);
    console.log(`prop: ${this.pro}`);
    console.log(`immutable: ${this.immutable}`);
    console.log(`mutable:`, this.mutable);
  }

  ngDoCheck() {
    console.log(`[DoCheck]`);
    console.log(`immutable: ${this.immutable}`);
    console.log(`mutable:`, this.mutable);
  }

  ngAfterContentInit() {
    console.log('[AfterContentInit]');
  }

  ngAfterViewInit() {
    console.log('[AfterViewInit]');
  }

  ngAfterContentChecked() {
    console.log('[AfterContentChecked]');
  }

  ngAfterViewChecked() {
    console.log('[AfterViewChecked]');
  }

  ngOnDestroy() {
    console.log('[OnDestroy]');
  }
}
