import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee2 } from '../app.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {
  public employee: Array<Employee2> = [];
  // @Input() footData2: Array<Employee> = [];
  // @Input() player: Array<Players> = [];

  constructor(
    private el: EmployeeService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.el.getData().subscribe(data => this.employee = data);
  }


  gotoPdetails()
  {
    this.route.navigate(['playerdetails']);
  }


 

}
