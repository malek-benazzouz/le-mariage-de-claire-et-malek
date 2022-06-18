import { Component, ElementRef, OnInit } from '@angular/core';
import { differenceInDays } from 'date-fns';
import { ScrollDispatcher } from '@angular/cdk/overlay';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { LoadingService } from '../loading/loading.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-couple-pres',
  templateUrl: './couple-pres.component.html',
  styleUrls: ['./couple-pres.component.scss'],
  animations: [
    trigger('goRight', [
      state('left', style({ transform: 'translateX(-150%)' })),
      state('right', style({ transform: 'translateX(0)' })),
      transition('left => right', [animate('1s')])
    ]),
    trigger('goLeft', [
      state('right', style({ transform: 'translateX(150%)' })),
      state('left', style({ transform: 'translateX(0)' })),
      transition('right => left', [animate('1s')])
    ]),
    trigger('fade', [
      state('out', style({ opacity: '0', transform: 'scale3d(.3, .3, .3)' })),
      state('in', style({ opacity: '1' })),
      transition('out => in', [animate('3s', keyframes([
        style({ opacity: '0', transform: 'scale3d(.3, .3, .3)' }),
        style({ opacity: '0', transform: 'scale3d(.3, .3, .3)' }),
        style({ opacity: '0', transform: 'scale3d(.3, .3, .3)' }),
        style({ opacity: '0', transform: 'scale3d(.3, .3, .3)' }),
        style({ opacity: '0', transform: 'scale3d(.3, .3, .3)' }),
        style({ opacity: '1', transform: 'scale3d(.8, .8, .8)' }),
        style({ opacity: '1', transform: 'scale3d(1.4, 1.4, 1.4)' }),
        style({ opacity: '1', transform: 'scale3d(1, 1, 1)' }),
        style({ opacity: '1', transform: 'scale3d(.8, .8, .8)' }),
        style({ opacity: '1', transform: 'scale3d(1.4, 1.4, 1.4)' }),
        style({ opacity: '1', transform: 'scale3d(1, 1, 1)' }),
        style({ opacity: '1', transform: 'scale3d(.8, .8, .8)' }),
        style({ opacity: '1', transform: 'scale3d(1.4, 1.4, 1.4)' }),
        style({ opacity: '1', transform: 'scale3d(1, 1, 1)' })
      ]))])
    ])
  ],
})
export class CouplePresComponent implements OnInit {

  daysAfter30thBirthdayClaire = differenceInDays(new Date(), new Date('2021-11-02'));
  daysAfter30thBirthdayMalek = differenceInDays(new Date(), new Date('2021-11-07'));

  isComponentVisible = false;

  constructor(
    private modalService: NgbModal,
    private scrollDispatcher: ScrollDispatcher,
    el: ElementRef,
    public loadingService: LoadingService
  ) {
    this.scrollDispatcher.scrolled(100).subscribe(() => {
      const rect = el.nativeElement.querySelector('#couple-pres').getBoundingClientRect();
      if (rect.top > 0 && rect.bottom < window.innerHeight + 50) { // fully visible
        this.isComponentVisible = true;
      }
      if (rect.top > window.innerHeight || rect.bottom < 0) { // fully invisible
        this.isComponentVisible = false;
      }
    });
  }

  ngOnInit(): void {}

  openModal(content: any): void {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

}
