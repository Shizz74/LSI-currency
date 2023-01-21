import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { filter, find, map } from 'rxjs/operators';

import { Currency } from '../_models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  env = "https://api.nbp.pl/api/exchangerates/tables/A/"

  constructor(
    private http: HttpClient
  ) { }

  getTodayCurrency() {
    return this.http.get<Currency[]>(`${this.env}?format=json`);
  }

  getSpecDayCurrency(date: string) {
    return this.http.get<Currency[]>(`${this.env}${date}/?format=json`);
  }
}
