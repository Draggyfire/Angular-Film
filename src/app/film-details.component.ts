import {Component, Input, OnInit} from '@angular/core';
import {Film} from "./film";

@Component({
  selector: 'app-film-details',
  template: `
    <div>
      <app-film-card *ngIf="film" [item]="film"></app-film-card>
    </div>
  `,
  styles: [
  ]
})
export class FilmDetailsComponent implements OnInit {
  @Input() film : Film;

  constructor() {
    this.film = <Film>{};
  }

  ngOnInit(): void {
  }

}
