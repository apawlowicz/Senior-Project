import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    remember: new FormControl(''),
  });

  constructor() { }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  ngOnInit() {
  }

}
