import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children-input',
  templateUrl: './children-input.component.html',
  styleUrls: ['./children-input.component.scss']
})
export class ChildrenInputComponent {

  @Input() messageFromParent: string = "";
  @Input() colorChild: string = "";

}
