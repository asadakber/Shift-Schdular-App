import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../../providers/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../../class/employee';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-employement',
  templateUrl: './employement.component.html',
  styleUrls: ['./employement.component.css']
})
export class EmployementComponent implements OnInit {
  employee: AngularFireList<any>;
  employeeList: Employee[];
  constructor(private db: AngularFireDatabase,private employeeService: EmployeeService) { }

  ngOnInit() {
    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = []
      item.forEach(element => {
        var y = element.payload.toJSON()
        y["$key"] = element.key;
        this.employeeList.push(y as Employee)
      })
    })
    // this.employee = this.db.list('/schdulr')
    // this.employee.snapshotChanges()
    // .subscribe(snap => {
    //   snap.forEach(snapshot => {
    //     this.employeeList = []
    //     this.employeeList.push(snapshot.payload.val())
    //   })
    
    // })
  }

  onSubmit(employeeForm: NgForm) {
    if(employeeForm.value.$key == null) 
      this.employeeService.insertEmployee(employeeForm.value)
    else 
      this.employeeService.updateEmployee(employeeForm.value)
  }

  onUpdate(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp)
  }

  resetForm(employeeForm?: NgForm) {
    if(employeeForm != null) 
      employeeForm.reset()
      this.employeeService.selectedEmployee = {
        $key: null,
        firstname: '',
        lastname: '',
        addressOne: '', 
        addressTwo: '', 
        city: '',  
        state: '', 
        zip: '', 
        email: '', 
        phone: '', 
      }
  }



}
