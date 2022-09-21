import { Component, OnInit } from '@angular/core';
import { faBabyCarriage, faCocktail, faLaugh, faMapMarkedAlt, faPhoneAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { LoadingService } from '../../loading/loading.service';

@Component({
  selector: 'app-program-detail-party',
  templateUrl: './program-detail-party.component.html',
  styleUrls: ['./program-detail-party.component.scss']
})
export class ProgramDetailPartyComponent implements OnInit {

  itineraryIcon = faMapMarkedAlt;
  cocktailIcon = faCocktail;
  babyIcon = faBabyCarriage;
  suitIcon = faUserTie;
  smileIcon = faLaugh;
  phoneIcon = faPhoneAlt;

  itineraryLinkBertrands = 'https://www.google.com/maps/place/Chateau+des+Bertrands/@43.3664857,6.4111034,17z/' +
    'data=!3m1!4b1!4m9!3m8!1s0x12ceb50189993d0f:0x2e9e6264b1a8c8cc!5m2!4m1!1i2!8m2!3d43.3664857!4d6.4132921!16s%2' +
    'Fg%2F11h3c4kd7y';

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {}

}
