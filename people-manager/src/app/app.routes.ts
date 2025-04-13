import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { AddPersonComponent } from './add-person/add-person.component';

export const routes: Routes = [
    { path: '', component: PeopleListComponent }, // Default route
    { path: 'edit/:id', component: EditPersonComponent },
    { path: 'delete/:id', component: DeletePersonComponent },
    { path: 'add', component: AddPersonComponent }, // Route for adding new people
];


