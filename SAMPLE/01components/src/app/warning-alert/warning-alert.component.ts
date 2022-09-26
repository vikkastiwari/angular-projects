import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  // styleUrls: ['./warning-alert.component.scss']
  styles:[`
    p {
      color:#c6538c;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
