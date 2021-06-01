import { Component, Input, OnInit } from '@angular/core';
import { RsvpResponse } from '../rsvp-form/rsvp.service';

@Component({
  selector: 'app-rsvp-summary',
  templateUrl: './rsvp-summary.component.html',
  styleUrls: ['./rsvp-summary.component.scss']
})
export class RsvpSummaryComponent implements OnInit {

  @Input() response: RsvpResponse;
  @Input() isAdmin: boolean;

  constructor() {}

  ngOnInit(): void {}

}
