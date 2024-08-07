import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todos',
    loadComponent: () => import('./todo-list/todo-list.component').then(m => m.TodoComponent),
  },
];
