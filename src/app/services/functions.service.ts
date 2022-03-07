import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs'
import * as timezone from 'dayjs/plugin/timezone'
import * as utc from 'dayjs/plugin/utc'
import "dayjs/locale/fr";

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.locale('fr')

@Injectable({
  providedIn: 'root'
})
export class DateFunctionsService {
  static new(date?:string, format?:string): dayjs.Dayjs {
    if (!date) {
      return dayjs();
    }
    if (!!format) {
      return dayjs(date, format);
    } else {
      return dayjs(date);
    }
  }
  constructor() { }
}
