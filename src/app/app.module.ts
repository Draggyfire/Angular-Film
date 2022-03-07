import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatTableModule} from "@angular/material/table";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {TableBasicExampleComponent} from './table-basic-example.component';
import {FilmListeComponent} from './film-liste.component';
import {FilmDetailsComponent} from './film-details.component';
import {BadgeAnneePipe} from './badge-annee.pipe';
import {DateFunctionsService} from "./services/functions.service";
import {FilmCardComponent} from './film-card.component';
import {FilmRatingComponent} from './film-rating.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableBasicExampleComponent,
    FilmListeComponent,
    FilmDetailsComponent,
    BadgeAnneePipe,
    FilmCardComponent,
    FilmRatingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [DateFunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
