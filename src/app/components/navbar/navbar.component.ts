import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isUserLogged=false;
  private authSubscription:Subscription; 

  constructor(private authService:AuthService){
    this.init();
  }

  init(){
    this.authSubscription = this.authService.authListener.subscribe(data=>{
      this.isUserLogged=data;
    })
  }

  logout(){
    this.authService.logout();
  }
}
