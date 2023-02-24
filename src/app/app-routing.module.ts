import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil-usuario', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
