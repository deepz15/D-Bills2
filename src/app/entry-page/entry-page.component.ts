import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {

  constructor(public appService: AppService) {
    const a = localStorage.getItem('Deepan');
    if (a) {
      this.appService.rocket = JSON.parse(a);
    }
  }

  prName: any;
  prAmount!: number;


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  del(i: any) {
    this.appService.rocket.splice(i, 1);
  }
  // tslint:disable-next-line:typedef
  add() {
    let r = {
      pname: this.prName,
      amount: this.prAmount
    };
    this.appService.rocket.push(r);
  }
}
