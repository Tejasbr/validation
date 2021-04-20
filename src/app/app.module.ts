import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MouseoverDirective } from './mouseover.directive';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
import { ApiServiceService } from './service/api-service.service';
import { TokenInterceptorService } from './service/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    MouseoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiServiceService,AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
