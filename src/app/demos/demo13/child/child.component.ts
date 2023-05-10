import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() maVariable: string = "";

  @ViewChild('ref') el!: ElementRef<HTMLButtonElement>;

  constructor () {
    console.log('Constructor');
    console.log('maVariable :>> ', this.maVariable);
  }

  ngOnChanges (changes: SimpleChanges): void {
    console.log('OnChanges : ', changes);
  }

  ngOnInit (): void {
    console.log('OnInit');
    // On peut faire les instanciations lourdes ici
    console.log('maVariable :>> ', this.maVariable);
    console.log('this.el :>> ', this.el); // AfterViewInit
  }

  // Utilisé quasiment jamais
  ngDoCheck (): void {
    console.log('DoCheck');
  }

  // Initialisé le AfterContent
  ngAfterContentInit (): void {
    console.log('AfterContentInit');
  }

  //  
  ngAfterContentChecked (): void {
    console.log('AfterContentChecked');
  }

  // Template HTML présent sur le DOM
  ngAfterViewInit (): void {
    console.log('AfterViewInit');
    console.log('this.el :>> ', this.el);
  }

  // Utilisé quasiment jamais
  ngAfterViewChecked (): void {
    console.log('AfterViewChecked');
  }

  // Déclenché dès que l'élément est détruit
  // Utile pour le nettoyage
  ngOnDestroy (): void {
    console.log('OnDestroy');
  }

}
