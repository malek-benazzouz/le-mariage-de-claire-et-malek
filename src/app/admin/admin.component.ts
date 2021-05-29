import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RsvpResponse, RsvpService } from '../rsvp-form/rsvp.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  rsvpResponses$: Observable<RsvpResponse[]>;
  isAuthenticated$: Observable<boolean>;
  userEmail$: Observable<string>;

  rsvpSummary = '';

  // Login form
  email: string;
  password: string;
  loginErrorMessage: string;
  hidePassword = true;

  constructor(private rsvpService: RsvpService) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.rsvpService.isAuthenticated();
    this.userEmail$ = this.rsvpService.getUserEmail();

    // Get responses only if authenticated
    this.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        this.rsvpResponses$ = this.rsvpService.getAllResponses();

        // Build response summary
        this.rsvpResponses$.subscribe((responses: RsvpResponse[]) => {
          if (responses) {
            this.rsvpSummary = `${responses.length} réponse${responses.length > 1 ? 's' : ''}`;
          }
        });
      }
    });
  }

  login(): void {
    this.rsvpService.signIn(this.email, this.password).then(
      success => {
        console.log('Login OK : ', success);
        this.loginErrorMessage = null;
      },
      error => {
        this.loginErrorMessage = error.message;
      }
    );
  }

  logout(): void {
    this.rsvpService.signOut().then(
      success => { console.log('Logout OK : ', success); },
      error => { console.error('Logout Error : ', error); }
    );
  }

}
