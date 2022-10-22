import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { TableBodyComponent } from './components/table-body/table-body.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPageComponent,
    SummaryCardComponent,
    ListTableComponent,
    ListPageComponent,
    TableBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
