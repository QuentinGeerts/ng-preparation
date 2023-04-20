import { Component } from '@angular/core';
import { ListeService } from './liste.service';

@Component({
  selector: 'app-demo18',
  templateUrl: './demo18.component.html',
  styleUrls: ['./demo18.component.scss']
})
export class Demo18Component {

  liste: string[] = [];

  constructor (private _listeService: ListeService) { }

  ngOnInit (): void {
    this.liste = this._listeService.getAll();
  }

}
