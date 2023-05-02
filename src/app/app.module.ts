import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ActionCardComponent } from './components/action-card/action-card.component';
import { StateOverviewComponent } from './components/state-overview/state-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionCardComponent,
    StateOverviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
