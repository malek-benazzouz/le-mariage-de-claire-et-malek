import { Component, OnInit } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  countdownConfig: CountdownConfig = {
    leftTime: 25000 // TODO compute real left time
  };

  ngOnInit(): void {

  }

}
