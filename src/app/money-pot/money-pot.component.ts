import { Component, OnInit } from '@angular/core';
import { faGift } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-money-pot',
  templateUrl: './money-pot.component.html',
  styleUrls: ['./money-pot.component.scss']
})
export class MoneyPotComponent implements OnInit {

  moneyIcon = faGift;

  constructor() { }

  ngOnInit(): void {}

}
