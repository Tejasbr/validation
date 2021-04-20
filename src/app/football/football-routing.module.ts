import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { FootballComponent } from './football.component';

const routes: Routes = [
  {
    path:'',
    component: FootballComponent
  },
  {
    path:'playerdetails',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FootballRoutingModule { }
