import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authListener: Subject<boolean> = new Subject<boolean>(); //se crea una variable tipo booleana

  constructor(private http:HttpClient, private router:Router) { }

  register(){}
  login(us:any, pass:any){

    let url="http://localhost:3000/login"; //se le da la url de donde va a sacar la info
    let data={
      user:us,
      password:pass
    } //data es un objeto compuesto por email y password
    //las variable que se encuentran dentro van a tomar los valores que se le envian a la función

    this.http.post(url, data).subscribe((response:any) =>{
      if(response.success==true){
        //console.log(data) //data se logea por consola
        //alert("Usuario logueado")

        let token = response.data.token;

        this.saveToken(token);
        this.authListener.next(true);
        this.router.navigate(['perfil-usuario']) //dirige a la pagina de registro

      }//si la petición es exitosa
      else{
        alert("Datos incorrectos")
        alert(response.statusMessage)
      }
    })
  }

  logout(){
    this.authListener.next(false); 
    localStorage.clear();
    this.router.navigate(['login']);
  }
  saveToken(token:string){
    localStorage.setItem("access_token", token)
  }
}
