import { Component, OnInit } from '@angular/core';
import { FILMS,Film } from "./film";

@Component({
  selector: 'app-film-liste',
  template: `
    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
      <!--- Note that these columns can be defined in any order.
            The actual rendered columns are set as a property on the row definition" -->

      <!-- Position Column -->
      <ng-container matColumnDef="title">
        <th mat-header-cell *matHeaderCellDef> Title </th>
        <td mat-cell *matCellDef="let element"> {{element.title}} </td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="year">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.year}} </td>
      </ng-container>

      <!-- Weight Column -->
      <ng-container matColumnDef="director">
        <th mat-header-cell *matHeaderCellDef> Director </th>
        <td mat-cell *matCellDef="let element"> {{element.director}} </td>
      </ng-container>

      <!-- Symbol Column -->
      <ng-container matColumnDef="actors">
        <th mat-header-cell *matHeaderCellDef> Actors </th>
        <td mat-cell *matCellDef="let element"> {{element.actors}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="lesColonnes"></tr>
      <tr mat-row *matRowDef="let row; columns: lesColonnes;" (click)="selectFilm(row)"></tr>
    </table>
    <app-film-details *ngIf="filmSelectionne" [film]="filmSelectionne"></app-film-details>
  `,
  styles: [
  ]
})
export class FilmListeComponent implements OnInit {
  lesColonnes: string[] = ['title', 'year', 'director'];
  dataSource=FILMS;
  filmSelectionne: Film|undefined = undefined;

  constructor() {}

  selectFilm(row: Film){
    if(row == this.filmSelectionne){
      this.filmSelectionne = undefined;
    }else{
      this.filmSelectionne=row;
    }
  }

  ngOnInit(): void {
  }

}
