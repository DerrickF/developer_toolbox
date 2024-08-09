import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [ CommonModule],
  selector: 'app-home',
  template: `
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="../../assets/codingGuy.jpg"
          class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Welcome to DevToolbox!</h1>
          <p class="py-6">
            Your all-in-one toolkit packed with essential tools to boost productivity and simplify your daily web dev tasks. It's the toolbox every developer needs for a smoother, smarter workflow!
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
