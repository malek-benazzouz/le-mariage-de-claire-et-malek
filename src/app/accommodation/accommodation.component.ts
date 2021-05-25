import { Component, OnInit } from '@angular/core';
import { faBook, faClock, faEuroSign, faMapMarkedAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {

  locationIcon = faMapMarkerAlt;
  itineraryIcon = faMapMarkedAlt;
  bookIcon = faBook;
  durationIcon = faClock;
  priceIcon = faEuroSign;

  bookingLinkAccommodation1 = 'https://www.chambres-hotes.fr/chambres-hotes_la-haute-verrerie_le-cannet-des-maures_h3371048.htm';
  itineraryLinkAccommodation1 = 'https://www.google.com/maps/dir/Domaine+des+Bertrands,+Le+Cannet-des-Maures/La+Haute+Verrerie,' +
    '+83340+Le+Cannet-des-Maures/@43.3669944,6.3707257,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12ceb4b3ef467259:0xf2f64da5b35d2cc' +
    'e!2m2!1d6.41233!2d43.367607!1m5!1m1!1s0x12c94b82c04cc16d:0x70fa9aa2259b7831!2m2!1d6.363665!2d43.375376!3e0';

  bookingLinkAccommodation2 = 'https://rouquan.com/fr/';
  itineraryLinkAccommodation2 = 'https://www.google.com/maps/dir/Domaine+des+Bertrands,+83340+Le+Cannet-des-Maures/Le+Mas+du+Rouquan' +
    ',+Rd+48,+Vidauban/@43.3548628,6.4114327,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12ceb4b3ef467259:0xf2f64da5b35d2cce!2m2!1d6.412' +
    '33!2d43.367607!1m5!1m1!1s0x12ceb48919ed24a7:0x8b96edd5d1ad31fb!2m2!1d6.4466154!2d43.3667061!3e0';

  constructor() { }

  ngOnInit(): void {}

}
