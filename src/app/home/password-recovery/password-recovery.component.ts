import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {
  recoverPasswordForm = new FormGroup({
    email: new FormControl(''),
  });

  constructor() { }

  onSubmit() {
    console.log(this.recoverPasswordForm.value);
  }

  ngOnInit() {
  }

}
