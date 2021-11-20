import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './hom/home/home.component';
import { LoginComponent } from './log/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
