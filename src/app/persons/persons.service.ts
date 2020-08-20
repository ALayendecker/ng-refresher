import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  // when changing this to private it means it can only be used inside the service
  // using Subject and injectible like this allows us to use subscriptions to push directly and live update
  personsChanged = new Subject<string[]>();
  // subject will hold string array data
  persons: string[] = ['Max', 'Ted', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
    //this persons Changed now emits an event everything addPerson is run
    this.personsChanged.next(this.persons);
    console.log(this.persons);
  }

  // removes person who's name you have chosen
  removePerson(name: string) {
    this.persons = this.persons.filter((person) => {
      return person !== name;
    });
    //this persons Changed now emits an event everything removePerson is run
    this.personsChanged.next(this.persons);
    console.log(this.persons);
  }
}
