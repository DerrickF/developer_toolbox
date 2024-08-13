import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jwt-decoder',
  imports: [
    CommonModule
  ],
  standalone: true,
  template: `
     <div class="ml-10 mt-10">
      <h1 class="text-5xl font-bold">JWT Decoder</h1>
    </div>
    <div class="min-h-screen bg-base-200 mt-10 card rounded-box flex items-center">
      
    </div>
 
  `,
})

export class JwtDecoderComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}