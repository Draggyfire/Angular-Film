import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {FilmListeComponent} from './film-liste.component';
import {FilmDetailsComponent} from './film-details.component';
import {BadgeAnneePipe} from './badge-annee.pipe';
import {DateFunctionsService} from "./services/functions.service";
import {FilmCardComponent} from './film-card.component';
import {FilmRatingComponent} from './film-rating.component';
import {MatButtonModule} from "@angular/material/button";
import { FilmListeCartesComponent } from './film-liste-cartes.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import { CarteBordureDirective } from './carte-bordure.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmListeComponent,
    FilmDetailsComponent,
    BadgeAnneePipe,
    FilmCardComponent,
    FilmRatingComponent,
    FilmListeCartesComponent,
    CarteBordureDirective
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatCardModule,
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatChipsModule
    ],
  providers: [DateFunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
