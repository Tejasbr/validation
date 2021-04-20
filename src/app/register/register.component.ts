import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
import { CustomvalidationService } from '../service/customvalidation.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  img:string = "assets/images/footlog1.jpg";
  // loginform:any = {};
  public clicked = false;
  regform: any;
  isHide:boolean = false;
  submitted = false;
  listdata:any;
  public userData: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    private route: Router, 
    private el: ApiServiceService,
    private customValidator: CustomvalidationService
    ) {
      
    }

  ngOnInit(): void {
    this.listdata = [];
    this.generateForm();
  }
  
  generateForm()
  {
   this.regform=this.fb.group({
        firstName: ['', Validators.maxLength(7)],
        email: ['',[Validators.required, Validators.email]],
        password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
        confpassword: ['', Validators.required],
        birthdate: ['', Validators.required]
    },
    {
      validator: this.customValidator.MatchPassword('password', 'confpassword'),
    }
    );
  }
  get f()
  {
    return this.regform.controls;
  }


  onSubmit()
  {
    this.submitted = true;
    this.isHide = !this.isHide;
    this.listdata.push(this.regform.value);
    console.log(this.regform);

    // let toDay = this.regform.birthdate;
    // toDay = toDay.toISOString();
    // console.log(toDay);
    if (this.regform.valid){
   this.el.registerUser(this.regform.value)
     .subscribe(
       res => {
         console.log(res);
         this.clicked=true;
         localStorage.setItem('token', res.token);
         
         // this.regUser=res;
       },
       err => console.log(err)
     )         
   // this.clicked=true;
   //  console.log(this.loginform.value);
  }
}

}
