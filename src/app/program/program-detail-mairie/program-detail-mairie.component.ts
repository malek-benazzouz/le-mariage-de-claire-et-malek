import { Component, OnInit } from '@angular/core';
import { faExclamationTriangle, faInfoCircle, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-program-detail-mairie',
  templateUrl: './program-detail-mairie.component.html',
  styleUrls: ['./program-detail-mairie.component.scss']
})
export class ProgramDetailMairieComponent implements OnInit {

  itineraryIcon = faMapMarkedAlt;
  infoIcon = faInfoCircle;
  warningIcon = faExclamationTriangle;

  itineraryLinkVauban = 'https://www.google.com/maps/dir/Parking+Port+Vauban,+Quai+du+Corps+Expeditionnaire+Fran%C3%A7ais+en+Italie,' +
    '+Antibes/Ville+d\'Antibes+Juan-les-Pins,+Cours+Mass%C3%A9na,+Antibes/@43.5827631,7.1266117,17.52z/data=!4m14!4m13!1m5!1m1!1s0x12cd' +
    'd59f55508fd5:0x58d600474556522!2m2!1d7.1266171!2d43.5839794!1m5!1m1!1s0x12cdd56b4ae20fcb:0x493ac71612527506!2m2!1d7.1278308!2d' +
    '43.5813427!3e2';

  itineraryLinkQPark = 'https://www.google.com/maps/dir/Q-Park+Pr%C3%A9+aux+P%C3%AAcheurs,+20+Avenue+de+Verdun,+06600+Antibes/' +
    'Ville+d\'Antibes+Juan-les-Pins,+Cours+Mass%C3%A9na,+Antibes/@43.5826367,7.1244107,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x1' +
    '2cdd5720676d6ab:0x753415caa8cb4b51!2m2!1d7.125296!2d43.5838431!1m5!1m1!1s0x12cdd56b4ae20fcb:0x493ac71612527506!2m2!1d7.12783' +
    '08!2d43.5813427!3e2';

  constructor() { }

  ngOnInit(): void {}

}
