import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { CountdownComponent } from './countdown/countdown.component';
import { IntroComponent } from './intro/intro.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CouplePresComponent } from './couple-pres/couple-pres.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';
import { MoneyPotComponent } from './money-pot/money-pot.component';
import {
  NgbAlertModule,
  NgbCarouselModule,
  NgbCollapseModule,
  NgbModalModule,
  NgbNavModule,
  NgbToastModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgxPrintModule } from 'ngx-print';
import { BonusComponent } from './bonus/bonus.component';
import { ProgramComponent } from './program/program.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgramDetailMairieComponent } from './program/program-detail-mairie/program-detail-mairie.component';
import { ProgramDetailPartyComponent } from './program/program-detail-party/program-detail-party.component';
import { ProgramDetailBrunchComponent } from './program/program-detail-brunch/program-detail-brunch.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatRadioModule } from '@angular/material/radio';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AdminComponent } from './admin/admin.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HeaderNavComponent,
    FooterComponent,
    CountdownComponent,
    IntroComponent,
    CarouselComponent,
    CouplePresComponent,
    SectionTitleComponent,
    ProgramComponent,
    ProgramDetailMairieComponent,
    ProgramDetailPartyComponent,
    ProgramDetailBrunchComponent,
    AccommodationComponent,
    RsvpFormComponent,
    MoneyPotComponent,
    BonusComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FontAwesomeModule,
    NgxPrintModule,
    ScrollingModule,
    ClipboardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    NgbCarouselModule,
    NgbNavModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbAlertModule,
    NgbToastModule,
    NgbTooltipModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
