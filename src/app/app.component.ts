import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from './service/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public clicked: boolean = false;
  public isClicked: boolean = false;

  // public people: Array<Login> = [];
 
  constructor(private route: Router, private el: ApiServiceService ){}
   
    
  loginform: any = {};
  img: string = "assets/images/footlog1.jpg";


  ngOnInit() {
    // this.getData();
    this.onSubmit();
  }
  
  // getData() {
  //   this.el.getData().subscribe(data => this.userData = data);
  // }

 
  onSubmit() {
    
    // console.log(this.loginform);
    this.el.loginUser(this.loginform)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.route.navigate(['submit']);
      },
      err => console.log(err)
    ) 
  }  
    // this.routing.navigate(['desk']);
  clickBtn()
 {
    this.isClicked=true;
 }

 
}
