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

  itineraryLinkBertrands = 'https://www.google.com/maps/dir/Ville+d\'Antibes+Juan-les-Pins,+Cours+Mass%C3%A9na,+Antibes/' +
    'Domaine+des+Bertrands,+Le+Cannet-des-Maures/@43.4277837,6.4806189,10.75z/data=!4m19!4m18!1m10!1m1!1s0x12cdd56b4ae20fc' +
    'b:0x493ac71612527506!2m2!1d7.1278308!2d43.5813427!3m4!1m2!1d6.4038349!2d43.3583245!3s0x12c94b346d3cbe95:0x8c63a5e183e1' +
    '64d6!1m5!1m1!1s0x12ceb4b3ef467259:0xf2f64da5b35d2cce!2m2!1d6.41233!2d43.367607!3e0';

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {}

}
