import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    standalone: true,
    imports: [IonicModule, CommonModule],
    selector: 'todo-list',
    template: `
        <h1>Template Works</h1>
    `
})

export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}