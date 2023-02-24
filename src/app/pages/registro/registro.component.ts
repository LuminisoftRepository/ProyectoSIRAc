import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  constructor(private formBuilder:FormBuilder){

  }
  loginForm=this.formBuilder.group({
    nombre:['', Validators.compose([Validators.required])],
    apellidos:['', Validators.compose([Validators.required])],
    email:['', Validators.compose([Validators.required, Validators.email])],
    n_telefono:['', Validators.compose([Validators.required, Validators.minLength(10)])]
  })

  save(){
    if(!this.loginForm.valid) return;
    console.log(this.loginForm.value)

    let data=JSON.stringify(this.loginForm.value)

    let endpoint="localhost:8080/api/v1/auth/";
    console.log(data);
  }

  get nombre(){
    return this.loginForm.get('nombre');
  }

  get apellidos(){
    return this.loginForm.get('apellidos');
  }
  get email(){
    return this.loginForm.get('email');
  }

  get n_telefono(){
    return this.loginForm.get('n_telefono');
  }
}
