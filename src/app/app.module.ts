import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';

@NgModule({
  declarations: [AppComponent, PersonsComponent],
  imports: [BrowserModule],
  providers: [],
  //only root app has to be registered in boostrap
  bootstrap: [AppComponent],
})
export class AppModule {}
