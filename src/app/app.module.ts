import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//forms module allows us to use ngmodel in our input component
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';

@NgModule({
  declarations: [AppComponent, PersonsComponent, PersonInputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  //only root app has to be registered in boostrap
  bootstrap: [AppComponent],
})
export class AppModule {}
