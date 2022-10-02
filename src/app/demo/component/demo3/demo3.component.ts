import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  // Une fois vu, revenir au niveau du Two-Way Binding pour expliquer plus en détails avec l'attribute et event binding [(ngModel)]

  maVariable: string | undefined;

  constructor () { }

  ngOnInit (): void {
    this.maVariable = "Valeur par défaut";
  }

  maMethode (texte: string): void {
    this.maVariable = texte;
  }

}
