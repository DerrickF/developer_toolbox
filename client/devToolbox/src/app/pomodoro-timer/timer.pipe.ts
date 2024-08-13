import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
  standalone: true
})

export class TimerPipe implements PipeTransform {
  transform(seconds: any, ...args: any[]): any {
    if(seconds < 10) {
      return '0' + seconds;
    } else {
      return seconds;
    }
  }
}