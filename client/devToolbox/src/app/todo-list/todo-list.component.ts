import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-todo-list',
  styles: [``],
  template: `
    <ion-content>
      <ion-toolbar>
        <ion-title>Todo List</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>

      <ion-card>
        <ion-card-content>
          <ion-list-header>
            <ion-input type="text" placeholder="Do Something Awesome" [(ngModel)]="newToDo"></ion-input>
            <ion-fab-button size="small" (click)="addTodo()">
              <ion-icon name="add"></ion-icon>
            </ion-fab-button>
          </ion-list-header>
          <ion-list *ngFor="let control of todos.controls">
            <ion-item [ngClass]="control.get('completed')?.value ? 'completed' : ''">
                <ion-label>{{control.get('title')?.value}}</ion-label>
                <ion-checkbox [checked]="control.get('completed')?.value" (click)="control.get('completed')?.setValue(!control.get('completed')?.value)"></ion-checkbox>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
})
export class TodoComponent implements OnInit {
  newToDo: string = '';

  constructor(private fb: FormBuilder) {}

  todoForm = this.fb.group({
    todos: this.fb.array([]),
  });

  get todos() {
    return this.todoForm.get('todos') as FormArray;
  }

  addTodo() {
    if(!(this.newToDo.length > 2)) return;

    const newTodo = this.fb.group({
        title: [this.newToDo], 
        completed: [false]
    });
    this.todos.push(newTodo)
    this.newToDo = '';
  }

  ngOnInit() {
    // this.todos.push('Buy Eggs');
    // this.todos.push('Buy Milk');
    // this.todos.push('Buy groceries');
  }
}