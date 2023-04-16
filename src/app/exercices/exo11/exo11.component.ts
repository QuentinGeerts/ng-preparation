import { Component } from '@angular/core';

@Component({
  selector: 'app-exo11',
  templateUrl: './exo11.component.html',
  styleUrls: ['./exo11.component.scss']
})
export class Exo11Component {

  article: string = "";
  listFromParent: string[] = ['Sel', 'Poivre']

  addItem(): void {
    this.listFromParent.push(this.article);
  }

  removeItem(index: number): void {
    this.listFromParent.splice(index, 1);
  }

}
