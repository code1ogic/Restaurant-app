import { Component, OnInit } from '@angular/core';
import { EmployeeInterface } from '../../model/employee-interface';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee-section',
  templateUrl: './employee-section.component.html',
  styleUrls: ['./employee-section.component.css']
})
export class EmployeeSectionComponent implements OnInit {

  uid : string = '';
  first_name: string = '';
  last_name: string = '';
  mobile: string = '';
  email: string = '';
  address: string = '';

  employeeList: EmployeeInterface[] = [];

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
    this.uid = '';
    this.first_name = '';
    this.last_name = '';
    this.mobile = '';
    this.email = '';
    this.address = '';
  }

  addEmployee() {
    var employeeObj: EmployeeInterface = {
      id: '',
      first_name: this.first_name,
      last_name: this.last_name,
      mobile: this.mobile,
      email: this.email,
      address: this.address
    }

    this.empService.addEmployee(employeeObj);
    this.ngOnInit();
  }

  getAllEmployees() {
    this.empService.getAllEmployee().subscribe(res => {

      this.employeeList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error occured while fetching employee data.' + err.message);
    })
  }

  deleteEmployee(employee : EmployeeInterface) {
    if(window.confirm('Are you sure you want to delete '+employee.first_name +' '+employee.last_name+' ?')) {
      this.empService.deleteEmployee(employee);
      this.empService.getAllEmployee();
    }
  }

  showEmployeeInfo(employee : EmployeeInterface) {
    this.uid = employee.id;
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.mobile = employee.mobile;
    this.email = employee.email;
    this.address = employee.address;
  }

  editEmployeeInfo(employee : EmployeeInterface) {
    this.uid = employee.id;
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.mobile = employee.mobile;
    this.email = employee.email;
    this.address = employee.address;
  }

  saveEditedEmployee() {
    var employeeObj: EmployeeInterface = {
      id: this.uid,
      first_name: this.first_name,
      last_name: this.last_name,
      mobile: this.mobile,
      email: this.email,
      address: this.address
    }
    this.empService.deleteEmployee(employeeObj);
    this.empService.addEmployee(employeeObj);
    this.ngOnInit();
  }

}
