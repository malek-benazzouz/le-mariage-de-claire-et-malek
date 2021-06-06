import { Component, Input, OnInit } from '@angular/core';
import { LoadingService } from '../loading/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() hasNavigation = true;

  isNavCollapsed = true;

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {}

}
