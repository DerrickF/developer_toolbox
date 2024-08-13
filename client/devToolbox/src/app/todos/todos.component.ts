import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-todos',
  imports: [
    CommonModule,
    FormsModule
  ],
  standalone: true,
  template: `
    <div class="ml-10 mt-10">
      <h1 class="text-5xl font-bold">Todos</h1>
    </div>
    <div class="min-h-screen bg-base-200 mt-10 card rounded-box">
      <div class="card rounded-box flex">
        <div class="join flex-auto justify-center mt-10">
          <input [(ngModel)]="newTodo"
            type="text"
            autofocus
            placeholder="New Task"
            class="input input-bordered w-full max-w-xs join-item"
            (keyup.enter)="createTodo()" />
            <button (click)="createTodo()" class="btn btn-primary join-item">Add</button>
        </div>
        <div class="card-body flex">
          <ol class="menu bg-base-100 rounded-box max-w-2xl justify-center">
            @for(todo of todos; track $index) {
              <div class="flex m-1 border border-primary rounded p-5">
                <li class="flex-1 text-lg">
                  <span>{{$index + 1}}: {{todo}}</span>
                </li>
                <button (click)="deleteTodo($index)" class="btn btn-primary">X</button>
              </div>
            } @empty {
              <div class="flex">
                <li class="flex-1">
                  <span>Create some tasks, and get to work!</span>
                </li>
              </div>
            }
          </ol>
      </div>
    </div>
  `,
})

export class TodosComponent implements OnInit {
  newTodo: string = "";
  todos: string[] = [];
  
  constructor(private db: LocalStorageService) { }
  
  ngOnInit() {
    this.todos = this.db.get('todos') ?? [];
  }
  
  createTodo() {
    this.todos.push(this.newTodo);
    this.db.set('todos', this.todos);
    this.newTodo = "";
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.db.set('todos', this.todos);
  }
}