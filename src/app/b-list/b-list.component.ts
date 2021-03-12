import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-b-list',
  templateUrl: './b-list.component.html',
  styleUrls: ['./b-list.component.css']
})
export class BListComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

}
