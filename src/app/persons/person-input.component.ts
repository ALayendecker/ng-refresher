import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  //kebab case
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
})
//pascal case
export class PersonInputComponent {
  // store the constructor function into the person create
  // <> are how we pass data into the constructor function EventEmitter
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';

  onCreatePerson() {
    console.log('created a person: ' + this.enteredPersonName);
    //two way binding allowed
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
