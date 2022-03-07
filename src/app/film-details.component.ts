import {Component, Input, OnInit} from '@angular/core';
import {Film} from "./film";

@Component({
  selector: 'app-film-details',
  template: `
    <p>
      <app-film-card [item]="film"></app-film-card>
      <span matBadge="{{film.year|badgeAnnee}}" matBadgeSize="small" matBadgeOverlap="false" matBadgeColor="accent">{{film.year}}</span>
    </p>
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
