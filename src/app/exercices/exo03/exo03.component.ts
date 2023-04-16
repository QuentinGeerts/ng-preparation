import { Component } from '@angular/core';

@Component({
  selector: 'app-exo03',
  templateUrl: './exo03.component.html',
  styleUrls: ['./exo03.component.scss']
})
export class Exo03Component {

  timer: any;
  temps: number = 0;

  start(): void {
    this.stop();
    this.timer = setInterval(() => {
      this.temps++;
    }, 1000)
  }

  stop(): void {
    clearInterval(this.timer);
    this.timer = null;
  }

  reset(): void {
    this.temps = 0;
    this.stop();
  }
}
