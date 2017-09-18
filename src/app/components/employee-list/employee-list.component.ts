import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  selectedEmployee: Employee;
  employees: Array<Employee> = [];
  constructor(private service: AppService) { }

  ngOnInit() {
    this.employees = this.service.getEmployees();
  }

  showDetail(emp){
    this.selectedEmployee = emp;
  }

}
