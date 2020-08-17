import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  persons: string[] = ['Max', 'Ted', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons);
  }

  // removes person who's name you have chosen
  removePerson(name: string) {
    this.persons = this.persons.filter((person) => {
      return person !== name;
    });
    console.log(this.persons);
  }
}
