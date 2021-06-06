import { Component, OnInit } from '@angular/core';
import { faHotdog, faInfoCircle, faPhoneAlt, faSun } from '@fortawesome/free-solid-svg-icons';
import { LoadingService } from '../../loading/loading.service';

@Component({
  selector: 'app-program-detail-brunch',
  templateUrl: './program-detail-brunch.component.html',
  styleUrls: ['./program-detail-brunch.component.scss']
})
export class ProgramDetailBrunchComponent implements OnInit {

  infoIcon = faInfoCircle;
  relaxIcon = faHotdog;
  chillIcon = faSun;
  phoneIcon = faPhoneAlt;

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {}

}
