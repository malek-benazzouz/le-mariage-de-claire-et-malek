import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CountdownComponent } from './countdown/countdown.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { IntroComponent } from './intro/intro.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CouplePresComponent } from './couple-pres/couple-pres.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ProgramComponent } from './program/program.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';
import { MoneyPotComponent } from './money-pot/money-pot.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

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
    MoneyPotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    NgbCarouselModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
