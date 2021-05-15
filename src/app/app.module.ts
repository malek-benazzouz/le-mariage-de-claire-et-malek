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
import { ProgramComponent } from './program/program.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';
import { MoneyPotComponent } from './money-pot/money-pot.component';
import { NgbCarouselModule, NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BonusComponent } from './bonus/bonus.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CountdownComponent,
    IntroComponent,
    CarouselComponent,
    CouplePresComponent,
    SectionTitleComponent,
    ProgramComponent,
    AccommodationComponent,
    RsvpFormComponent,
    MoneyPotComponent,
    BonusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    NgbCarouselModule,
    NgbNavModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
