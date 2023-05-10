import { Component } from '@angular/core';

@Component({
  selector: 'app-exo04',
  templateUrl: './exo04.component.html',
  styleUrls: ['./exo04.component.scss']
})
export class Exo04Component {

  passwordType: string = 'password';

  toggleVisiblePassword (): void {

    if (this.passwordType === 'password') this.passwordType = 'text';
    else this.passwordType = 'password';

  }

}
