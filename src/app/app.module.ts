import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { QueryComponent } from './query/query.component';
import { WordDefComponent } from './word-def/word-def.component';
import { HistoryComponent } from './history/history.component';
import { HistoryItemComponent } from './history/history-item/history-item.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    WordDefComponent,
    HistoryComponent,
    HistoryItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
