import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  myProp!: string;
  message!: string;

  constructor () { }

  ngOnInit (): void {
    this.myProp = "En attente du children...";
    this.message = "Mon message pour l'enfant";
  }

  reactToChildren (s: string) {
    this.myProp = s;
  }

}
