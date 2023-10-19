import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    IonicModule,
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
})
export class App {
  public appPages = [
    { title: 'Todo List', url: '/todos', icon: 'list' },
    { title: 'Pomodoro Timer', url: '/home', icon: 'timer' },
    { title: 'JWT Decoder', url: '/folder/Favorites', icon: 'barcode' },
    { title: 'Img Formatter', url: '/folder/Archived', icon: 'cloud-upload' },
    { title: 'Scratchpad', url: '/folder/Trash', icon: 'pencil' },
    { title: 'Kanban Board', url: '/folder/Spam', icon: 'apps' },
    { title: 'Kanban Board', url: '/folder/Spam', icon: 'apps' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
