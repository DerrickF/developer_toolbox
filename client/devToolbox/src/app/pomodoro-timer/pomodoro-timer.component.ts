import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { TimerPipe } from './timer.pipe';

@Component({
  selector: 'pomodoro-timer',
  standalone: true,
  imports: [
    CommonModule,
    TimerPipe,
  ],
  template: `
    <div class="ml-10 mt-10">
      <h1 class="text-5xl font-bold">Pomodoro Timer</h1>
    </div>
    <div class="min-h-screen bg-base-200 mt-10 card rounded-box flex items-center">
      <div class="p-10">
        <div class="text-9xl tabular-nums">{{min()}}:{{sec() | timer }}</div>
      </div>
      <div class="join">
        <button (click)="startTimer()" class="join-item btn btn-secondary">Start</button>
        <button (click)="restartTimer()" class="join-item btn btn-accent">Reset</button>
        <button (click)="stopTimer()" class="join-item btn btn-primary">Stop</button>
      </div>
    </div>
  `,
})

export class TimerComponent implements OnInit {
  countInSeconds = signal(1500);
  min = computed(() => Math.floor(this.countInSeconds() / 60));
  sec = computed(() => Math.floor((this.countInSeconds() % 60)));
  isRunning = signal(false);
  intervalId: any;

  constructor() { }

  ngOnInit() {}

  startTimer() {
    if(!this.isRunning()) {
      this.isRunning.set(true);
      this.intervalId = setInterval(() => {
        if (this.countInSeconds() > 0) {
          this.countInSeconds.update(count => count - 1);
          window.document.title = this.min() + ' mins - Pomodoro Timer';
        } else {
          clearInterval(this.intervalId);
          this.isRunning.set(false);
        }
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.isRunning.set(false);
  }

  restartTimer() {
    this.countInSeconds.set(1500);
    this.isRunning.set(false);
    window.document.title = this.min() + ' mins - Pomodoro Timer';
  }
}