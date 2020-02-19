import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup ({
    fullname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeat_password: new FormControl(''),
    role: new FormControl(''),
  });

  constructor() { }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  ngOnInit() {
  }

}
