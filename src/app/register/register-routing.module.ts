import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path:'',
    component: RegisterComponent
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
export class RegisterRoutingModule { }
