import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html',
  styleUrls: ['./demo14.component.scss']
})
export class Demo14Component {

  // Avec utilisation du TWB
  name: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';

  myForm!: FormGroup;

  constructor (private fb: FormBuilder) { }

  ngOnInit (): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)], []],
      email: ['', [Validators.required, Validators.email], []],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)], []],
      gender: ['', [Validators.required], []],
    }, {});
  }

  send (): void {
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
    console.log(this.gender);
  }

  sendFG (): void {
    console.log(this.myForm.valid);
    console.log(this.myForm.controls['name'].valid);
    console.log(this.myForm.controls['name'].value);
    console.log(this.myForm.controls['email'].value);
    console.log(this.myForm.controls['password'].value);
    console.log(this.myForm.controls['gender'].value);
  }

}
