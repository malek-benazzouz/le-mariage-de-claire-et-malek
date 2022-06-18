import { ChangeDetectionStrategy, Component } from '@angular/core';
import { differenceInSeconds } from 'date-fns';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent {

  weddingDate = new Date('2022-10-01 16:00');

  days$ = new BehaviorSubject<number | undefined>(undefined);
  hours$ = new BehaviorSubject<number | undefined>(undefined);
  minutes$ = new BehaviorSubject<number | undefined>(undefined);
  seconds$ = new BehaviorSubject<number | undefined>(undefined);

  constructor() {
    this.createCountdownTimer(differenceInSeconds(this.weddingDate, new Date()))
      .subscribe((countdown: Countdown) => {
        this.days$.next(countdown.days);
        this.hours$.next(countdown.hours);
        this.minutes$.next(countdown.minutes);
        this.seconds$.next(countdown.seconds);
      });
  }

  createCountdownTimer(remainingSeconds: number): Observable<Countdown> {
    remainingSeconds = Math.max(remainingSeconds, 1);
    return timer(0, 1000) // Every second
      .pipe(
        take(remainingSeconds), // During the remaining seconds only
        map(() => this.secondsToCountdown(--remainingSeconds)) // Remove one second and convert to object
      );
  }

  secondsToCountdown(seconds: number): Countdown {
    return {
      days: Math.floor(seconds / (60 * 60 * 24)),
      hours: Math.floor((seconds / (60 * 60)) % 24),
      minutes: Math.floor((seconds / 60) % 60),
      seconds: Math.floor((seconds) % 60)
    };
  }

}
