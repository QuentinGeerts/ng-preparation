import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  maVariable1!: string; // definite assignment assertion 
  maVariable2: number = 15;
  declare maVariable3: boolean; // ambient declaration

  constructor () { }

  ngOnInit (): void {
    this.maVariable1 = "Hello World !";
    this.maVariable3 = true;
  }

}
