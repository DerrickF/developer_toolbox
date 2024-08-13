import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todos',
    loadComponent: () => import('./todos/todos.component').then(m => m.TodosComponent),
  },
  {
    path: 'timer',
    loadComponent: () => import('./pomodoro-timer/pomodoro-timer.component').then(m => m.TimerComponent),
  },
  {
    path: 'decoder',
    loadComponent: () => import('./jwt-decoder/jwt-decoder.component').then(m => m.JwtDecoderComponent)
  },
];
