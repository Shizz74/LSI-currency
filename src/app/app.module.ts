import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyTableComponent } from './currency-table/currency-table.component';

// import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
