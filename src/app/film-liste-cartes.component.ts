import {Component, Input, OnInit} from '@angular/core';
import {Film,FILMS} from "./film";

@Component({
  selector: 'app-film-liste-cartes',
  template: `
    <div style="text-align: center">
      <h1>Gestion des films</h1>
      <mat-grid-list cols="3" rowHeight="800px">
        <mat-grid-tile *ngFor="let film of films">
          <app-film-card [item]="film"></app-film-card>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [
  ]
})
export class FilmListeCartesComponent implements OnInit {
  films :Film[]=FILMS;
  constructor() {}

  ngOnInit(): void {
  }

}
