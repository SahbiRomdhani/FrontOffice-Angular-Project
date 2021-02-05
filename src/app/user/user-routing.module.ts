import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent ,children:[
  {
    path: 'registre',component: RegistreComponent
  },
  {
    path: 'login',component: LoginComponent
  }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
