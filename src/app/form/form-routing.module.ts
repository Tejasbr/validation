import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path:'football',
    loadChildren: () => import('../football/football.module').then(m=>m.FootballModule)
  },
  {
    path:'about',
    loadChildren: () => import('../about/about.module').then(m=>m.AboutModule)
  },
  {
    path:'login',
    loadChildren: () => import('../app.module').then(m=>m.AppModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
