import { Component } from '@angular/core';
import { AppService } from './app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D-Bills';
  navStyle = 'width:200px;';
  constructor(public appService: AppService) {

  }
}
