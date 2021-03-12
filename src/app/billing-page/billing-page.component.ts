import { Component, OnInit } from '@angular/core';
import { App2Service } from '../app2.service';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.css']
})
export class BillingPageComponent implements OnInit {
  constructor(public app2Service: App2Service) {
  }
  quant: any;
  total: any;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  changeR(v: any) {
    const name = v.pname;
    const x: any = this.app2Service.rocket2.find((x: any) => x.pname === name);
    v.amount = x?.amount;
  }
  // tslint:disable-next-line:typedef
  addrow() {
    const row = {
      pname: '',
      amount: '0',
      qua: 1,
      tot: '0'
    };
    this.app2Service.rocket2.push(row);
  }

  // tslint:disable-next-line:typedef
  getTotal() {
    let total = 0;
    const b = this.app2Service.rocket2.forEach((x: any) => {
      total += x.amount * x.quant;
    });
    return total;
  }
  save() {

  }
}

