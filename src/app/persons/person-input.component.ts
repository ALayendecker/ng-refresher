import { Component } from '@angular/core';

@Component({
  //kebab case
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css'],
})
//pascal case
export class PersonInputComponent {
  enteredPersonName = '';

  onCreatePerson() {
    console.log('created a person: ' + this.enteredPersonName);
    //two way binding allowed
    this.enteredPersonName = '';
  }
}
