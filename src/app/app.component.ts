import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription, from } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

const coldObservable$ = Observable.create(
  observer => observer.next(Math.random())
);

coldObservable$.subscribe(
  value => console.log(`1st observable's observer: ${value}`)
);

coldObservable$.subscribe(
  value => console.log(`2nd observable's observer: ${value}`)
);

const subject = new Subject();
const hotObservable$ = subject.asObservable();

hotObservable$.subscribe(
  value => console.log(`1nd observable's observer: ${value}`)
);

hotObservable$.subscribe(
  value => console.log(`2nd observable's observer: ${value}`)
);

subject.next(Math.random());

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  myArray = [1, 2, 3, 4, 5];
  subscription: Subscription;
  value: number[] = [];

  constructor() {
  }

  ngOnInit() {
    const observable$ = from(this.myArray);

    this.subscription = observable$.pipe(
      map(item => item * 2),
      filter(item => item > 5),
      tap(item => console.log(item))
    )
    .subscribe(
      value => this.value.push(value),
      error => console.log(error),
      () => console.log('Streaming finished')
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
