import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: AngularFireList<any>
  selectedEmployee: Employee = new Employee()
  constructor(private db: AngularFireDatabase) { 
    
  }

  getData() {
    this.employeeList = this.db.list('/employee')
    return this.employeeList
  }

  

  insertEmployee(employee: Employee) {
    this.employeeList.push({
      firstname: employee.firstname,
      lastname: employee.lastname,
      addressOne: employee.addressOne,
      addressTwo: employee.addressTwo,
      city: employee.city,
      state: employee.state,
      zip: employee.zip,
      email: employee.email,
      phone: employee.phone
    }) 
  }

  updateEmployee(employee: Employee) {
    this.employeeList.update(employee.$key, {
      firstname: employee.firstname,
      lastname: employee.lastname,
      addressOne: employee.addressOne,
      addressTwo: employee.addressTwo,
      city: employee.city,
      state: employee.state,
      zip: employee.zip,
      email: employee.email,
      phone: employee.phone
    })
  }

  deleteSchedular($key: string) {
    this.employeeList.remove($key)
  }
}
