import { Component } from '@angular/core';

@Component({
  selector: 'app-demo09',
  templateUrl: './demo09.component.html',
  styleUrls: ['./demo09.component.scss']
})
export class Demo09Component {

  isToggled: boolean = false;
  liste: string[] = ["pomme", "poire", "cerise", "pêche", "prune", "orange"];
  inputValue: string = "";

  toggle (): void {
    this.isToggled = !this.isToggled;
  }

}
