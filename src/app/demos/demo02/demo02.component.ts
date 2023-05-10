import { Component } from '@angular/core';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.scss']
})
export class Demo02Component {

  maVariable1: string = "";
  maVariable2: number = 0;
  maVariable3: boolean = false;

  // Après avoir vu l'Event Binding
  changeValue (text: KeyboardEvent | any) {
    console.log("Called: ", text.target.value);
    this.maVariable1 = text.target.value;
  }

}
