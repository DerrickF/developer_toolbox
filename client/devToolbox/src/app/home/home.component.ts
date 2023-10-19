import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule],
  selector: 'app-home',
  template: `
    <ion-content>
      <ion-toolbar>
        <ion-title>Home</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
     
      <h1>TODO: what kind of things can you do here</h1>
    </ion-content>
  `,
})
export class HomeComponent implements OnInit {

  constructor() {}


  ngOnInit() {}
}
