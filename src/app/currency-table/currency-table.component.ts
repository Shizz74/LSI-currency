import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/core/_models/currency';

import { CurrencyService } from 'src/core/_services/currency.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {

  currencyData: any;
  data: any;

  constructor(
    private currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
    this.currencyService.getTodayCurrency().subscribe(res => {
      this.currencyData = res;
      this.data = this.currencyData.map( (obj: any) => {
        return obj.rates;
      })
      this.currencyData = this.data[0];
    })
  }

}
