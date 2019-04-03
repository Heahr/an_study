import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { PasswordValidator } from '../password-validator';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup ({
      userid: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{4,10}')
      ]),
      passwordGroup: new FormGroup({
        password: new FormControl('',
        Validators.required),
        confirmPassword: new FormControl('',
        Validators.required)
      }, PasswordValidator.match),
      hobbies: new FormArray([
        new FormControl(''),
        new FormControl('')
      ])
    })
  }

  get userid() {
    return this.userForm.get('userid');
  }

  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }

  get password(){
    return this.userForm.get('passwordGroup.password');
  }

  get confirmPassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }

  get hobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  onSubmit() {
    console.log(this.userForm);
    this.userForm.reset();
  }
}
