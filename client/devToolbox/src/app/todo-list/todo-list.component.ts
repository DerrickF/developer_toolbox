import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-todo-list',
  styles: [`
    .completed {
      text-decoration: line-through;
    }
  `],
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
            <ion-input type="text" placeholder="Do Something Awesome" [autofocus]="true" (keyup.enter)="addTodo()" [(ngModel)]="newTodoModel"></ion-input>
            <ion-fab-button size="small" (click)="addTodo()">
              <ion-icon name="add"></ion-icon>
            </ion-fab-button>
          </ion-list-header>
          <ion-list *ngFor="let control of todos.controls; let i = index">
            <ion-item [ngClass]="control.get('completed')?.value ? 'completed' : ''" (click)="control.get('completed')?.setValue(!control.get('completed')?.value)">
                <ion-label>{{control.get('title')?.value}}</ion-label>
                <ion-checkbox [checked]="control.get('completed')?.value"></ion-checkbox>
                <ion-button slot="end" (click)="deleteTodo(i); $event.stopPropagation()">
                  <ion-icon slot="icon-only" name="trash"></ion-icon>
                </ion-button>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
})
export class TodoComponent implements OnInit {
  newTodoModel: string = '';

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {}

  todoForm = this.fb.group({
    todos: this.fb.array([]),
  });

  get todos() {
    return this.todoForm.get('todos') as FormArray;
  }

  deleteTodo(index: number) {
    this.todos.removeAt(index);
  }

  addTodo() {
    if(!(this.newTodoModel.length > 2)) return;

    const newTodo = this.fb.group({
        title: [this.newTodoModel], 
        completed: [false]
    });
    this.todos.push(newTodo)
    this.newTodoModel = '';
  }


}