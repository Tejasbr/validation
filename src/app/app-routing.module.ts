import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path:'register',
    loadChildren: () => import('./register/register.module').then(m=>m.RegisterModule)
  },
  {
    path:'submit',
    loadChildren: () => import('./form/form.module').then(m=>m.FormModule)
    // canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
