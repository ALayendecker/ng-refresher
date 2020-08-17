//Input is a decorator that allows us to bind components
// don't need a bindable input anymore if we're using services
import { Component, OnInit } from '@angular/core';

import { PersonsService } from './persons.service';

//dont forget to register component in app.module.ts
@Component({
  //naming convention is app-componentname
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})
export class PersonsComponent implements OnInit {
  personList: string[];
  //long form instead of shorthand
  // private personService: PersonsService;

  // now i want to grab my data from my persons services
  constructor(private personService: PersonsService) {
    //this.personList = personService.persons;
    // instead of using it like this we should be doing lifecycle hooks instead
    this.personService = personService;
    // there is a shortcut using this but instead providing private when passing in personService in the constructor function
  }

  // this gets fired when our component is created essentially on component did mount
  ngOnInit() {
    this.personList = this.personService.persons;
  }

  // literally just passing the persons name from
  // the method remove person in persons.service.ts
  onRemovePerson(personName: string) {
    this.personService.removePerson(personName);
  }
}
