import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ActionCardComponent } from './components/action-card/action-card.component';
import { StateOverviewComponent } from './components/state-overview/state-overview.component';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionCardComponent,
    StateOverviewComponent,
    AuthFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
