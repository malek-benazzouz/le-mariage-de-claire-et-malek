import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {}

}
