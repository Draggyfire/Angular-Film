import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-rating',
  template: `
    <div>
      <button mat-icon-button color="accent" *ngFor="let ratingId of ratingArray; index as i">
        <mat-icon>
          {{ iconStatus(i) }}
        </mat-icon>
      </button>
    </div>
    <p>{{ rating }}/{{ totalStar }}</p>

  `,
  styles: [':host {display: flex; flex-direction: row; justify-content: flex-start; align-items: center;}']
})
export class FilmRatingComponent implements OnInit {
  @Input() rating: number = 0;
  totalStar: number = 5;
  ratingArray: number[] = [];

  constructor() {
  }

  ngOnInit() {
    for (let index = 0; index < this.totalStar; index++) {
      this.ratingArray.push(index);
    }
  }

  iconStatus(index: number) {
    let val = Math.floor(this.rating*100)/10 - ((index) * 10);
    if (val >= 7.5 ) {
      return 'star';
    } else if (val >= 2.5 && val < 7.5) {
      return 'star_half';
    } else {
      return 'star_border';
    }
  }
}
