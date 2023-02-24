import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service'; //se importa esta nueva librería
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private formBuilder:FormBuilder, private authService: AuthService){ //se usa la nueva librería aquí

  }
  loginForm=this.formBuilder.group({
    user:['', Validators.compose([Validators.required])],
    password:['', Validators.compose([Validators.required, Validators.minLength(8)])]
  })

  save(){
    if(!this.loginForm.valid) return;
    /*console.log(this.loginForm.value)

    let data=JSON.stringify(this.loginForm.value)

    let endpoint="localhost:8080/api/v1/auth/";
    console.log(data);*/
    let user = this.loginForm.get('user')?.value;
    let password = this.loginForm.get('password')?.value
    
    console.log(user,password)

    this.authService.login(user,password) //este metoo se llama desde el auth
  }

  get user(){
    return this.loginForm.get('user');
  }

  get password(){
    return this.loginForm.get('password');
  }
}
