import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pomodoro-timer',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div class="ml-10 mt-10">
      <h1 class="text-5xl font-bold">Pomodoro Timer</h1>
    </div>
    <div class="min-h-screen bg-base-200 mt-10 card rounded-box flex justify-center items-center">
      <div>
        <div class="text-9xl tabular-nums">25:00</div>
      </div>
      <div class="join">
        <button class="join-item btn btn-primary">Start</button>
        <button class="join-item btn btn-accent">Start</button>
      </div>
    </div>
  `,
})

export class TimerComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}