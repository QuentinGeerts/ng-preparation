import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-children-output',
  templateUrl: './children-output.component.html',
  styleUrls: ['./children-output.component.scss']
})
export class ChildrenOutputComponent {

  @Output() emitToParent: EventEmitter<string> = new EventEmitter<string>();

  messageFromChild: string = "Mon message";

  onEmit(): void {
    this.emitToParent.emit(this.messageFromChild);
  }

}
