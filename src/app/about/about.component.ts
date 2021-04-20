import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee2 } from '../app.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // public details:Array<any> = [];
  constructor() { }

  ngOnInit() {
    // this.details = this.el.playerdetail();
  }
  
 
  
}
