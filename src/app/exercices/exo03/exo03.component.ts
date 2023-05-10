import { Component } from '@angular/core';

@Component({
  selector: 'app-exo03',
  templateUrl: './exo03.component.html',
  styleUrls: ['./exo03.component.scss']
})
export class Exo03Component {

  timer: any;
  count: number = 0;

  start (): void {
    if (this.timer) return;
    this.timer = setInterval(() => { this.count++; }, 1000);
  }

  stop (): void {
    clearInterval(this.timer);
    this.timer = null;
  }

  reset (): void {
    this.count = 0;
    this.stop();
  }
}
