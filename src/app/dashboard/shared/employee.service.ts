import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore'
import { EmployeeInterface } from '../model/employee-interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private afs : AngularFirestore) { }

  // add employee
  addEmployee(empObj : EmployeeInterface) {
    empObj.id = this.afs.createId();
    return this.afs.collection('/Employees').add(empObj);
  }

  // get all employees
  getAllEmployee() {
    return this.afs.collection('/Employees').snapshotChanges();
  }

  //delete employee
  deleteEmployee(emp : EmployeeInterface) {
    console.log(emp.id);
    return this.afs.doc('/Employees/'+emp.id).delete().then(() => {
    },err => {
      alert('Something went wrong. '+err.message);
    })
  }

}
