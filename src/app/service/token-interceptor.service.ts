import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next){
    let authservice = this.injector.get(ApiServiceService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
