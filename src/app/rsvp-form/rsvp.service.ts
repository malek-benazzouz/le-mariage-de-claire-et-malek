import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface RsvpResponse {
  // Form data
  firstName: string;
  lastName: string;
  partyPresent: 'yes' | 'no';
  partyPlusOnePresent: boolean;
  partyPlusOneFirstName: string;
  partyPlusOneLastName: string;
  partyChildrenPresent: boolean;
  partyChildrenDetails: string;
  brunchSpecificity: boolean;
  brunchPresent: 'yes' | 'no';
  brunchPlusOnePresent: boolean;
  brunchPlusOneFirstName: string;
  brunchPlusOneLastName: string;
  brunchChildrenPresent: boolean;
  brunchChildrenDetails: string;
  acceptYoungPicConditions: boolean;
  acceptEventConditions: boolean;
  message: string;
  // Extra data
  responseDate: { timestamp: number, formatted: string };
}

@Injectable({ providedIn: 'root' })
export class RsvpService {

  constructor(private store: AngularFirestore, private auth: AngularFireAuth) {}

  public signIn(email: string, password: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  public signOut(): Promise<any> {
    return this.auth.signOut();
  }

  public isAuthenticated(): Observable<boolean> {
    return this.auth.user.pipe(map(user => user !== null));
  }

  public getUserEmail(): Observable<string> {
    return this.auth.user.pipe(map(user => user.email));
  }

  public addResponse(response: RsvpResponse): Promise<DocumentReference<RsvpResponse>> {
    return this.store.collection<RsvpResponse>('rsvp-responses').add(response);
  }

  public getAllResponses(): Observable<RsvpResponse[]> {
    return this.store.collection<RsvpResponse>(
      'rsvp-responses',
      ref => ref.orderBy('responseDate.timestamp')
    ).valueChanges();
  }

}
