import {Component, Input, OnInit} from '@angular/core';
import {Film} from "./film";

@Component({
  selector: 'app-film-card',
  template: `
        <mat-card style="display: block;width: 350px;margin:auto;text-align: center;border: solid ghostwhite">
          <mat-card-header style="margin: 0 0 0 60px">
            <mat-card-title style="text-align: center">
              <span matBadge="{{item.year|badgeAnnee}}" matBadgeSize="small" matBadgeOverlap="false" matBadgeColor="accent">{{item.year}}</span>
            </mat-card-title>
            <mat-card-subtitle>{{item.title}}</mat-card-subtitle>
            <mat-card-subtitle>{{item.director}}</mat-card-subtitle>
          </mat-card-header>
          <img mat-card-image src="{{item.affiche}}" alt="{{item.title}}">
          <mat-card-content>
            <h2>Liste des acteurs</h2>
            <div>
              <span *ngFor="let actor of item.actors"> {{actor}} /</span>
            </div>
            <app-film-rating [rating]="item.rating"></app-film-rating>
          </mat-card-content>
        </mat-card>
  `,
  styles: [
  ]
})
export class FilmCardComponent implements OnInit {
  @Input() item:Film;

  constructor() {
    this.item=<Film>{};
  }

  ngOnInit(): void {
  }

}
