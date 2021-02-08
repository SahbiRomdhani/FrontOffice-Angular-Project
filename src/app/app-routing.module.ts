import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuardService } from 'src/Shared/Services/UserGuardService';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) ,canActivate:[UserGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
