import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// importing rxjs/operators gives us access to use operators

@Injectable({ providedIn: 'root' })
export class PersonsService {
  // when changing this to private it means it can only be used inside the service
  // using Subject and injectible like this allows us to use subscriptions to push directly and live update
  personsChanged = new Subject<string[]>();
  // subject will hold string array data
  persons: string[];

  constructor(private http: HttpClient) {}
  //
  fetchPersons() {
    this.http
      // the <any> allows us to be ambiguous with the data type coming back and have results on line 23
      .get<any>('https://swapi.dev/api/people/')
      .pipe(
        map((resData) => {
          return resData.results.map((character) => character.name);
          // this is a different map method from the one above this is our normal map method
        })
      )
      .subscribe((transformedData) =>
        this.personsChanged.next(transformedData)
      );
  }

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
