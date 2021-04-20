import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private service: ApiServiceService,
              private router: Router    
          ){}
  
  canActivate():boolean{

    if(this.service.loggedIn()){
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }
  }
}
