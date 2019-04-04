import { Component, OnInit } from '@angular/core';

interface Customer {
  id: number;
  name: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];

  constructor() { }

  ngOnInit() {
    this.customers = [
      { id: 1, name: 'Customer-1' },
      { id: 2, name: 'Customer-2' }
    ]
  }

}
