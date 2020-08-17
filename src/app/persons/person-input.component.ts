import { Component } from '@angular/core';
// we dont need output or event emitter anymore
import { PersonsService } from './persons.service';

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
  // when using service wee dont need output
  // @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';

  constructor(private personService: PersonsService) {
    //this.personList = personService.persons;
    // instead of using it like this we should be doing lifecycle hooks instead
    this.personService = personService;
    // there is a shortcut using this but instead providing private when passing in personService in the constructor function
  }

  onCreatePerson() {
    console.log('created a person: ' + this.enteredPersonName);
    //two way binding allowed
    // this.personCreate.emit(this.enteredPersonName);
    // we no longer need emit when we're using services
    this.personService.addPerson(this.enteredPersonName);

    this.enteredPersonName = '';
  }
}
