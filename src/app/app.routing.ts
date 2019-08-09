import { Routes, RouterModule } from '@angular/router';
import { TodoItemFormComponent } from './todo-item-form.component';
import { TodoComponent } from './todo.component';

const appRoutes: Routes = [
    { path: 'add', component: TodoItemFormComponent },
    { path: '', component: TodoComponent, pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
