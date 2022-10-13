import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  isToggled: boolean = true;
  liste!: string[];
  inputValue!: string;

  constructor () { }

  ngOnInit (): void {
    this.liste = [
      "pomme", "poire", "pêche", "prune", "papaye", "orange", "pamplemousse"
    ]
    this.inputValue = "";
  }

  toggle () {
    this.isToggled = !this.isToggled;
  }

}
