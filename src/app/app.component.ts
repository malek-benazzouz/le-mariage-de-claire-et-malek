import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading/loading.service';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('bounce', [
      state('in', style({ transform: 'scale3d(.5, .5, .5)' })),
      state('out', style({ transform: 'scale3d(1, 1, 1)' })),
      transition('out => in', [animate('1s', keyframes([
        style({ transform: 'scale3d(.6, .6, .6)' }),
        style({ transform: 'scale3d(.8, .8, .8)' }),
        style({ transform: 'scale3d(1, 1, 1)' })
      ]))]),
      transition('in => out', [animate('1s', keyframes([
        style({ transform: 'scale3d(1.1, 1.1, 1.1)' }),
        style({ transform: 'scale3d(.8, .8, .8)' }),
        style({ transform: 'scale3d(.6, .6, .6)' })
      ]))])
    ])
  ],
})
export class AppComponent implements OnInit {

  private criticalImagesLoaded$ = new Subject();

  displayLoadingOverlay = true;

  animationState = 'out';

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {
    if (window.location.pathname === '/admin') {
      this.displayLoadingOverlay = false;
      return;
    }
    timer(4000, 500)
      .pipe(takeUntil(this.criticalImagesLoaded$))
      .subscribe(() => {
        if (this.loadingService.criticalImagesLoaded) {
          this.displayLoadingOverlay = false;
          this.criticalImagesLoaded$.next();
        }
      });
  }

  onAnimationComplete(): void {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }

}
