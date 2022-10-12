import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.scss']
})
export class Demo10Component implements OnInit {

  myForm!: FormGroup;

  constructor (
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit (): void {
    this.myForm = this._formBuilder.group(
      {
        'email': ["test", [Validators.email, Validators.required]],
        'login': [null, Validators.pattern("[A-Za-z0-9]")],
        'film': this._formBuilder.array([])
      }
    );
  }

  getArray (): FormArray {
    return this.myForm.get('film') as FormArray;
  }

  addControl () {
    this.getArray().push(new FormControl());
  }

}
