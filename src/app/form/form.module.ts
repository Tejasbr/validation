import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { ApiServiceService } from '../service/api-service.service';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule
  ],
  providers:[ApiServiceService]
})
export class FormModule { }
