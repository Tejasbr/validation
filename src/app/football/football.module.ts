import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootballRoutingModule } from './football-routing.module';
import { FootballComponent } from './football.component';
import { AboutComponent } from '../about/about.component';


@NgModule({
  declarations: [FootballComponent],
  imports: [
    CommonModule,
    FootballRoutingModule
  ]
})
export class FootballModule { }
