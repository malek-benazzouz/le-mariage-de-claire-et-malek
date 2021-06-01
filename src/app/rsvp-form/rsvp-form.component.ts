import { Component, OnInit } from '@angular/core';
import { faExclamationTriangle, faFrown, faSmile } from '@fortawesome/free-solid-svg-icons';
import { RsvpService } from './rsvp.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewportScroller } from '@angular/common';
import { format } from 'date-fns';

@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.scss']
})
export class RsvpFormComponent implements OnInit {

  smileIcon = faSmile;
  sadIcon = faFrown;
  errorIcon = faExclamationTriangle;

  rsvpForm: FormGroup = new FormGroup({});

  controls = {
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    partyPresent: new FormControl(undefined, [Validators.required]),
    partyPlusOnePresent: new FormControl(undefined),
    partyPlusOneFirstName: new FormControl(undefined),
    partyPlusOneLastName: new FormControl(undefined),
    partyChildrenPresent: new FormControl(undefined),
    partyChildrenDetails: new FormControl(undefined),
    brunchSpecificity: new FormControl(undefined),
    brunchPresent: new FormControl(undefined),
    brunchPlusOnePresent: new FormControl(undefined),
    brunchPlusOneFirstName: new FormControl(undefined),
    brunchPlusOneLastName: new FormControl(undefined),
    brunchChildrenPresent: new FormControl(undefined),
    brunchChildrenDetails: new FormControl(undefined),
    acceptYoungPicConditions: new FormControl(undefined),
    acceptEventConditions: new FormControl(undefined),
    message: new FormControl(undefined)
  };

  formSubmitted = false;
  responseSent = false;

  constructor(
    private rsvpService: RsvpService,
    private modalService: NgbModal,
    private viewportScroller: ViewportScroller
  ) {
    Object.entries(this.controls).forEach(([name, control]: [string, FormControl]) => {
      this.rsvpForm.addControl(name, control);
    });
    // Cross-field validations
    this.controls.partyPlusOnePresent.valueChanges.subscribe(() => { this.adaptPartyPlusOneValidation(); });
    this.controls.partyChildrenPresent.valueChanges.subscribe(() => { this.adaptPartyChildrenValidation(); });
    this.controls.brunchSpecificity.valueChanges.subscribe(() => { this.adaptBrunchPresentValidation(); });
    this.controls.brunchPlusOnePresent.valueChanges.subscribe(() => { this.adaptBrunchPlusOneValidation(); });
    this.controls.brunchChildrenPresent.valueChanges.subscribe(() => { this.adaptBrunchChildrenValidation(); });
    this.controls.partyPresent.valueChanges.subscribe(() => { this.adaptConditionsValidation(); });
    this.controls.brunchPresent.valueChanges.subscribe(() => { this.adaptConditionsValidation(); });
  }

  ngOnInit(): void {}

  validateFormAndOpenModal(content: any): void {
    this.formSubmitted = true;
    if (this.rsvpForm.valid) {
      this.modalService.open(content, { size: 'lg', centered: true });
    }
  }

  submitForm(): void {
    this.rsvpService.addResponse({
      ...this.rsvpForm.value,
      responseDate: { timestamp: Date.now(), formatted: format(new Date(), 'dd MMMM yyyy, HH:mm') }
    }).then(() => {
      this.responseSent = true;
    });
    this.viewportScroller.setOffset([0, 100]);
    this.viewportScroller.scrollToAnchor('rsvp-form-anchor');
    this.modalService.dismissAll();
  }

  getFormValidationErrors(): any {
    return Object.keys(this.rsvpForm.controls)
      .map(controlName => ({ controlName, errors: this.rsvpForm.get(controlName).errors }))
      .filter(e => e.errors);
  }

  adaptPartyPlusOneValidation(): void {
    if (this.controls.partyPlusOnePresent.value) {
      this.controls.partyPlusOneFirstName.setValidators(Validators.required);
      this.controls.partyPlusOneLastName.setValidators(Validators.required);
    } else {
      this.controls.partyPlusOneFirstName.clearValidators();
      this.controls.partyPlusOneLastName.clearValidators();
    }
    this.controls.partyPlusOneFirstName.updateValueAndValidity();
    this.controls.partyPlusOneLastName.updateValueAndValidity();
  }

  adaptPartyChildrenValidation(): void {
    if (this.controls.partyChildrenPresent.value) {
      this.controls.partyChildrenDetails.setValidators(Validators.required);
    } else {
      this.controls.partyChildrenDetails.clearValidators();
    }
    this.controls.partyChildrenDetails.updateValueAndValidity();
  }

  adaptBrunchPresentValidation(): void {
    if (this.controls.brunchSpecificity.value) {
      this.controls.brunchPresent.setValidators(Validators.required);
    } else {
      this.controls.brunchPresent.clearValidators();
    }
    this.controls.brunchPresent.updateValueAndValidity();
  }

  adaptBrunchPlusOneValidation(): void {
    if (this.controls.brunchPlusOnePresent.value) {
      this.controls.brunchPlusOneFirstName.setValidators(Validators.required);
      this.controls.brunchPlusOneLastName.setValidators(Validators.required);
    } else {
      this.controls.brunchPlusOneFirstName.clearValidators();
      this.controls.brunchPlusOneLastName.clearValidators();
    }
    this.controls.brunchPlusOneFirstName.updateValueAndValidity();
    this.controls.brunchPlusOneLastName.updateValueAndValidity();
  }

  adaptBrunchChildrenValidation(): void {
    if (this.controls.brunchChildrenPresent.value) {
      this.controls.brunchChildrenDetails.setValidators(Validators.required);
    } else {
      this.controls.brunchChildrenDetails.clearValidators();
    }
    this.controls.brunchChildrenDetails.updateValueAndValidity();
  }

  adaptConditionsValidation(): void {
    if (this.controls.partyPresent.value === 'yes' ||
      (this.controls.brunchSpecificity.value && this.controls.brunchPresent.value === 'yes')
    ) {
      this.controls.acceptYoungPicConditions.setValidators(Validators.requiredTrue);
      this.controls.acceptEventConditions.setValidators(Validators.requiredTrue);
    } else {
      this.controls.acceptYoungPicConditions.clearValidators();
      this.controls.acceptEventConditions.clearValidators();
    }
    this.controls.acceptYoungPicConditions.updateValueAndValidity();
    this.controls.acceptEventConditions.updateValueAndValidity();
  }

}
