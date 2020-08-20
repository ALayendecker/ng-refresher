import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

//forms module allows us to use ngmodel in our input component
import { FormsModule } from '@angular/forms';
// these imports are typescript
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, PersonsComponent, PersonInputComponent],
  // these imports are angular/ng

  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  //only root app has to be registered in boostrap
  bootstrap: [AppComponent],
})
export class AppModule {}
