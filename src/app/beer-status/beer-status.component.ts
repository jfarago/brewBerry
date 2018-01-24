import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-beer-status',
  templateUrl: './beer-status.component.html',
  styleUrls: ['./beer-status.component.scss']
})
export class BeerStatusComponent implements OnInit {

  @Input() beer: Object;

  constructor() {
  }

  ngOnInit() {
  }

}
