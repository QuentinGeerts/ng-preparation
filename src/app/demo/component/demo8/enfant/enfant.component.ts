import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  @Input() title!: string;
  @Input() message!: string;

  @Output() monEvent!: EventEmitter<string>;

  constructor () {
    this.monEvent = new EventEmitter<string>();

  }

  ngOnInit (): void {
  }

  methode (text: string) {
    this.monEvent.emit(text);
  }

}
