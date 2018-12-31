import { Component, OnInit } from '@angular/core';
import { SchdularService } from '../../../../providers/schdular.service';
import { Schdulr } from '../../../../class/schdulr';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../../providers/auth.service';
import { AngularFireDatabase ,AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Employee } from '../../../../class/employee';
import { EmployeeService } from '../../../../providers/employee.service';
import { TimeSchdule } from '../../../../class/time-schdule';

@Component({
  selector: 'app-schdules',
  templateUrl: './schdules.component.html',
  styleUrls: ['./schdules.component.css']
})
export class SchdulesComponent implements OnInit {
  employee: AngularFireList<any>;
  employeeList: Employee[];
  timeSchdule: AngularFireList<any>;
  timeSchduleList: TimeSchdule[];
  time: AngularFireList<any[]>;
  constructor(private employeeservice: EmployeeService,private db: AngularFireDatabase,private authservice: AuthService,private schdulrservice: SchdularService) { }

  ngOnInit() {
    var x = this.employeeservice.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = []
      item.forEach(element => {
        var y = element.payload.toJSON()
        y["$key"] = element.key;
        this.employeeList.push(y as Employee)
      })
    })
   
  }

  AddTimeSchdule(timeForm: NgForm) {
    if(timeForm.value.$key == null) 
      this.schdulrservice.AddTmeSchdule(timeForm.value)
    else
      this.schdulrservice.updateTimeSchdule(timeForm.value)
  }

  resetForm(timeForm?: NgForm) {
    if(timeForm != null)
    timeForm.reset()
    this.schdulrservice.selectedTime = {
      $key: null,
      name: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
    }
  }



}
