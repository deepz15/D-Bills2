import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class App2Service {

  constructor() {
    const a = localStorage.getItem('Deepan');
    if (a) {
      this.rocket2 = JSON.parse(a);
      console.log(this.rocket2);
    }
    setInterval(() => {
      localStorage.setItem('Deepan2', JSON.stringify(this.rocket2));
    }, 300);
    // setInterval(() => {
    //   let bb = localStorage.getItem('Deepan2');
    //   if (bb) { this.rocket2 = JSON.parse(bb); }
    // },300);
    // const aaa = localStorage.getItem('Deepan2');
    // console.log(aaa);
  }
  rocket2: Array<{
  }> = [];
  billNumber: any;
  pname: any;
  amount: any;
  qua: any;

}
