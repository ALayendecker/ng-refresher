import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//similar to class constructors
export class AppComponent {
  title = 'ng-refresher';
  //the persons example is redundant in this instance but shows forced types
  persons: string[] = ['Max', 'Ted', 'Anna'];
}
