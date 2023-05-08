import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { nameValidator } from './Validators/name.validators';
import { emailValidator } from './Validators/email.validators';
import { twoPasswordCheckValidator } from './Validators/twoPasswordValidate.validators';

@Component({
  selector: 'app-demo15',
  templateUrl: './demo15.component.html',
  styleUrls: ['./demo15.component.scss']
})
export class Demo15Component {

  myForm!: FormGroup;

  constructor (private fb: FormBuilder) { }

  ngOnInit (): void {
    this.myForm = this.fb.group({
      name: ['', [nameValidator], []],
      email: ['', [emailValidator], []],
      password: ['', [], []],
      passwordVerify: ['', [], []],
    }, {
      validators: twoPasswordCheckValidator
    });
  }

}
