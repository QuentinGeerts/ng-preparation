import { Component } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.scss']
})
export class Demo04Component {

  // Une fois terminé, revenir au niveau du Two-Way Binding pour expliquer plus en détails avec l'attribute et Event Binding [(ngModel)]

  maVariable: number = 0;
  url: string = "https://www.google.com";
  bool: boolean = true;

  min: number = 10;
  max: number = 50;

  rangeValue: number = this.min;

  changeValue(): void {
    this.maVariable = 42;
  }

}
