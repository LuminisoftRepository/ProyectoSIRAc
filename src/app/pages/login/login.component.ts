import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private formBuilder:FormBuilder){

  }
  loginForm=this.formBuilder.group({
    user:['', Validators.compose([Validators.required])],
    password:['', Validators.compose([Validators.required, Validators.minLength(8)])]
  })

  save(){
    if(!this.loginForm.valid) return;
    console.log(this.loginForm.value)

    let data=JSON.stringify(this.loginForm.value)

    let endpoint="localhost:8080/api/v1/auth/";
    console.log(data);
  }

  get user(){
    return this.loginForm.get('user');
  }

  get password(){
    return this.loginForm.get('password');
  }
}
