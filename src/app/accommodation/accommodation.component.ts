/* tslint:disable:max-line-length */
import { Component, OnInit } from '@angular/core';
import {
  faBook,
  faClock,
  faEuroSign,
  faHandPointDown,
  faMapMarkedAlt,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { LoadingService } from '../loading/loading.service';

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
  arrowDownIcon = faHandPointDown;

  bookingLinkAccommodation1 = 'https://www.chateausaintroux.com/';
  itineraryLinkAccommodation1 = 'https://www.google.com/maps/dir/Chateau+des+Bertrands,+Route+de+la+Garde+Freinet,+83340+Le+Cannet-des-Maures/' +
    'chateau+st+roux/@43.36833,6.3785196,14z/data=!4m13!4m12!1m5!1m1!1s0x12ceb50189993d0f:0x2e9e6264b1a8c8cc!2m2!1d6.4131904!2d43.3664648!1m5!1' +
    'm1!1s0x12c94c78de5cd083:0x10300ee22d37c905!2m2!1d6.3705214!2d43.3795457';

  bookingLinkAccommodation2 = 'https://www.lesportesdeprovence.com/';
  itineraryLinkAccommodation2 = 'https://www.google.com/maps/dir/Chateau+des+Bertrands,+Route+de+la+Garde+Freinet,+83340+Le+Cannet-des-Maures/H%C3%B4tel+Les+' +
    'Portes+de+Provence,+220+RDN+7+CAP+7+quartier+causserene,+83340+Le+Cannet-des-Maures/@43.3764103,6.3628221,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x12ceb' +
    '50189993d0f:0x2e9e6264b1a8c8cc!2m2!1d6.4131904!2d43.3664648!1m5!1m1!1s0x12c94c0cc5f69195:0xe903a087d4fdba5b!2m2!1d6.3473713!2d43.3921794 ';

  bookingLinkAccommodation3 = 'https://www.domaine-lacigaliere.com/fr/';
  itineraryLinkAccommodation3 = 'https://www.google.com/maps/dir/Domaine+des+Bertrands,+83340+Le+Cannet-des-Maures/Camping+Domaine+De+La' +
    '+Cigaliere,+Route+du+Thoronet,+Le+Cannet-des-Maures/@43.3900076,6.3397038,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12ceb4b3ef467259:' +
    '0xf2f64da5b35d2cce!2m2!1d6.41233!2d43.367607!1m5!1m1!1s0x12c94c4687345885:0x1d8dd85e8895ef73!2m2!1d6.336822!2d43.421435!3e0';

  bookingLinkAccommodation4 = 'https://www.lecannetdesmaures.com/ville-du-cannet-des-maures/ville-du-cannet-des-maures/' +
    'ou-dormir-ou-manger/joomlannuaire/fiche/5-chambre-d-hote-la-haute-verrerie/4-hebergement-restauration';
  itineraryLinkAccommodation4 = 'https://www.google.com/maps/dir/Domaine+des+Bertrands,+83340+Le+Cannet-des-Maures/Route+de+St+Tropez,' +
    '+83550+Vidauban/@43.3694434,6.4100028,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12ceb4b3ef467259:0xf2f64da5b35d2cce!2m2!1d6.41233!2d4' +
    '3.367607!1m5!1m1!1s0x12ceb3653b718f37:0x40ba970b2155b3cb!2m2!1d6.4407827!2d43.3893819!3e0';

  bookingLinkAccommodation5 = 'https://www.lecannetdesmaures.com/component/adirectory/joomlannuaire/fiche/17-gite-t6-chateau-du-bouillidou%20/';
  itineraryLinkAccommodation5 = 'https://www.google.com/maps/dir/Chateau+des+Bertrands,+Route+de+la+Garde+Freinet,+83340+Le+Cannet-des-Maures/' +
    'Ch%C3%A2teau+Colbert+Cannet,+Chem.+du+Ch%C3%A2teau,+83340+Le+Cannet-des-Maures/@43.3770256,6.3608597,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x' +
    '12ceb50189993d0f:0x2e9e6264b1a8c8cc!2m2!1d6.4131904!2d43.3664648!1m5!1m1!1s0x12c94c6d1ac2f0c9:0x8545a835503a3512!2m2!1d6.3446237!2d43.3954693';

  bookingLinkAccommodation6 = 'https://www.le-clos-des-medievales.fr/';
  itineraryLinkAccommodation6 = 'https://www.google.com/maps/dir/Domaine+des+Bertrands,+Le+Cannet-des-Maures/Le+Clos+des+M%C3%A9di%C3%' +
    'A9vales,+43%C2%B027\'08.2%22N%2B6%C2%B018\'15.3%22E+le+Cols+des+M%C3%A9di%C3%A9vales,+83340+Le+Thoronet/@43.4054634,6.2885347,12z/' +
    'data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12ceb4b3ef467259:0xf2f64da5b35d2cce!2m2!1d6.41233!2d43.367607!1m5!1m1!1s0x12c94e11684949db:0x' +
    '3b8af3dc918a02b7!2m2!1d6.3043748!2d43.4523845!3e0';

  bookingLinkAccommodation7 = 'https://www.lecannetdesmaures.com/ville-du-cannet-des-maures/ville-du-cannet-des-maures/ou-dormir-ou-manger/' +
    'joomlannuaire/fiche/595-location-siasonneire-le-maure/4-hebergement-restauration';
  itineraryLinkAccommodation7 = 'https://www.google.com/maps/dir/Chateau+des+Bertrands,+Route+de+la+Garde+Freinet,+83340+Le+Cannet-des-Maures/' +
    'Voie+Aur%C3%A9lienne,+83340+Le+Cannet-des-Maures/@43.3757058,6.354815,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x12ceb50189993d0f:0x2e9e6264b1' +
    'a8c8cc!2m2!1d6.4131904!2d43.3664648!1m5!1m1!1s0x12c94c05ac4e49a3:0xc404e268b71a02b5!2m2!1d6.331357!2d43.3918139';

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {}

}
