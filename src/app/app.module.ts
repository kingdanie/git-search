import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AppCommonModule } from './common';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
