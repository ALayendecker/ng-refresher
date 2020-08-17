import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component imports
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'input', component: PersonInputComponent },
];

@NgModule({
  // empty string for home
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
