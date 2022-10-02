import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  maVariable1!: string;
  maVariable2!: number;
  maVariable3!: boolean;

  constructor () { }

  ngOnInit (): void {
    this.maVariable1 = "Valeur par défaut";
    this.maVariable2 = 0;
    this.maVariable3 = false;
  }

  // changeValue (text: KeyboardEvent | any) {
  //   console.log("called: ", text.target.value);
  //   this.maVariable1 = text.target.value;
  // }

}
