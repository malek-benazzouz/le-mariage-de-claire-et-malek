import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss']
})
export class BonusComponent implements OnInit {

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {}

  onImageLoadStart(): void {

  }

}
