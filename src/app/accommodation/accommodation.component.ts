import { Component, OnInit } from '@angular/core';
import { faBook, faClock, faEuroSign, faHandPointDown, faMapMarkedAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
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

  bookingLinkAccommodation1 = 'https://www.chambres-hotes.fr/chambres-hotes_la-haute-verrerie_le-cannet-des-maures_h3371048.htm';
  itineraryLinkAccommodation1 = 'https://www.google.com/maps/dir/Domaine+des+Bertrands,+Le+Cannet-des-Maures/La+Haute+Verrerie,' +
    '+83340+Le+Cannet-des-Maures/@43.3669944,6.3707257,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12ceb4b3ef467259:0xf2f64da5b35d2cc' +
    'e!2m2!1d6.41233!2d43.367607!1m5!1m1!1s0x12c94b82c04cc16d:0x70fa9aa2259b7831!2m2!1d6.363665!2d43.375376!3e0';

  bookingLinkAccommodation2 = 'https://rouquan.com/fr/';
  itineraryLinkAccommodation2 = 'https://www.google.com/maps/dir/Domaine+des+Bertrands,+83340+Le+Cannet-des-Maures/Le+Mas+du+Rouquan' +
    ',+Rd+48,+Vidauban/@43.3548628,6.4114327,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12ceb4b3ef467259:0xf2f64da5b35d2cce!2m2!1d6.412' +
    '33!2d43.367607!1m5!1m1!1s0x12ceb48919ed24a7:0x8b96edd5d1ad31fb!2m2!1d6.4466154!2d43.3667061!3e0';

  bookingLinkAccommodation3 = 'https://www.domaine-lacigaliere.com/fr/';
  itineraryLinkAccommodation3 = 'https://www.google.com/maps/dir/Domaine+des+Bertrands,+83340+Le+Cannet-des-Maures/Camping+Domaine+De+La' +
    '+Cigaliere,+Route+du+Thoronet,+Le+Cannet-des-Maures/@43.3900076,6.3397038,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12ceb4b3ef467259:' +
    '0xf2f64da5b35d2cce!2m2!1d6.41233!2d43.367607!1m5!1m1!1s0x12c94c4687345885:0x1d8dd85e8895ef73!2m2!1d6.336822!2d43.421435!3e0';

  bookingLinkAccommodation4 = 'https://www.lecannetdesmaures.com/ville-du-cannet-des-maures/ville-du-cannet-des-maures/' +
    'ou-dormir-ou-manger/joomlannuaire/fiche/5-chambre-d-hote-la-haute-verrerie/4-hebergement-restauration';
  itineraryLinkAccommodation4 = 'https://www.google.com/maps/dir/Domaine+des+Bertrands,+83340+Le+Cannet-des-Maures/Route+de+St+Tropez,' +
    '+83550+Vidauban/@43.3694434,6.4100028,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12ceb4b3ef467259:0xf2f64da5b35d2cce!2m2!1d6.41233!2d4' +
    '3.367607!1m5!1m1!1s0x12ceb3653b718f37:0x40ba970b2155b3cb!2m2!1d6.4407827!2d43.3893819!3e0';

  bookingLinkAccommodation5 = 'https://www.booking.com/hotel/fr/idyllique-vidauban1.fr.html?aid=356980;label=gog235jc-1DCAsoTUITaWR' +
    '5bGxpcXVlLXZpZGF1YmFuMUgNWANoTYgBAZgBDbgBF8gBDNgBA-gBAfgBAogCAagCA7gCpfe0hQbAAgHSAiRmNjFhMjE0Ny0zMjY4LTRjMjAtOGExOS1lOWI1ODUwY' +
    'jkwNDDYAgTgAgE;sid=f99a4ced7d16ebee40a8d5fc8c5c0cf9;all_sr_blocks=667406501_273255493_2_0_0;checkin=2021-09-04;checkout=2021-09' +
    '-05;dest_id=-1476137;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=667406501_273255493_2_0_0;' +
    'hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=667406501_273255493_2_0_0__10400;srepoch=16219' +
    '65799;srpvid=537a7ef33ccc022c;type=total;ucfs=1;sig=v13Y1GQ1jm#hotelTmpl';
  itineraryLinkAccommodation5 = 'https://www.google.com/maps/dir/Domaine+des+Bertrands,+Le+Cannet-des-Maures/219+Chemin+de+la+Futaie,' +
    '+83550+Vidauban/@43.382667,6.3714534,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12ceb4b3ef467259:0xf2f64da5b35d2cce!2m2!1d6.41233!2' +
    'd43.367607!1m5!1m1!1s0x12ceb3730ea79491:0x9ba13df633a9c32!2m2!1d6.4433303!2d43.3965898!3e0';

  bookingLinkAccommodation6 = 'https://www.le-clos-des-medievales.fr/fr';
  itineraryLinkAccommodation6 = 'https://www.google.com/maps/dir/Domaine+des+Bertrands,+Le+Cannet-des-Maures/Le+Clos+des+M%C3%A9di%C3%' +
    'A9vales,+43%C2%B027\'08.2%22N%2B6%C2%B018\'15.3%22E+le+Cols+des+M%C3%A9di%C3%A9vales,+83340+Le+Thoronet/@43.4054634,6.2885347,12z/' +
    'data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12ceb4b3ef467259:0xf2f64da5b35d2cce!2m2!1d6.41233!2d43.367607!1m5!1m1!1s0x12c94e11684949db:0x' +
    '3b8af3dc918a02b7!2m2!1d6.3043748!2d43.4523845!3e0';

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {}

}
