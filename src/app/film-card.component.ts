import {Component, Input, OnInit} from '@angular/core';
import {Film} from "./film";

@Component({
  selector: 'app-film-card',
  template: `
    <div>
      <h1>{{item.year}}</h1>
      <h2>{{item.title}}</h2>
      <h3>{{item.director}}</h3>
      <img src="{{item.affiche}}" alt="{{item.title}}">
      <h2>Liste des acteurs</h2>
      <div><span *ngFor="let actor of item.actors">{{actor}}</span></div>
      <app-film-rating [rating]="{{item.rating}}"></app-film-rating>
    </div>
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
