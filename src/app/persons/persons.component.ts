import { Component } from '@angular/core';

//dont forget to register component in app.module.ts
@Component({
  //naming convention is app-componentname
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})
export class PersonsComponent {}
