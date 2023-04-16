import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {

  @Input() listFromChild: string[] = []
  @Output() emitDelete: EventEmitter<number> = new EventEmitter<number>();

  remove (index: number): void {
    this.emitDelete.emit(index);
  }

}
