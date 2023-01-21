import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Todo List', url: '/folder/Inbox', icon: 'list' },
    { title: 'Pomodoro Timer', url: '/folder/Outbox', icon: 'timer' },
    { title: 'JWT Decoder', url: '/folder/Favorites', icon: 'barcode' },
    { title: 'Img Formatter', url: '/folder/Archived', icon: 'cloud-upload' },
    { title: 'Scratchpad', url: '/folder/Trash', icon: 'pencil' },
    { title: 'Kanban Board', url: '/folder/Spam', icon: 'apps' },
    { title: 'Kanban Board', url: '/folder/Spam', icon: 'apps' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
