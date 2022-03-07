import { Pipe, PipeTransform } from '@angular/core';
import {DateFunctionsService} from "./services/functions.service";
import {Film} from "./film";

@Pipe({
  name: 'badgeAnnee'
})

export class BadgeAnneePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const current = DateFunctionsService.new();
    const film = DateFunctionsService.new(value+"-"+current.month()+"-"+current.day());
    console.log(film,current);
    console.log(value)
    if(current.year()-film.year()>5){
      return 5
    }else if (current.year()-film.year()>1){
      return -5
    }else return 1
  }

}
