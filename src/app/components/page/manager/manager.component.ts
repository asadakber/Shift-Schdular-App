import { Component, OnInit, Input } from '@angular/core';
import { SchdularService } from '../../../providers/schdular.service';
import { Schdulr } from '../../../class/schdulr';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../providers/auth.service';
import { AngularFireDatabase ,AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Employee } from '../../../class/employee';
import { EmployeeService } from '../../../providers/employee.service';
import { TimeSchdule } from '../../../class/time-schdule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  schdulrList: Schdulr[];
  schdulr: AngularFireObject<any>;
  employee: AngularFireList<any>;
  employeeList: Employee[];
  timeScheduleList: TimeSchdule[];
  timeSchdule: AngularFireObject<any>;
  constructor(private router: Router,private db: AngularFireDatabase,private employeeservice: EmployeeService,private authservice: AuthService,private schdulrservice: SchdularService) {
    var a = this.schdulrservice.getSchdule();
    a.snapshotChanges().subscribe(item => {
      this.timeScheduleList = []
      item.forEach(element => {
        var b = element.payload.toJSON()
        b["$key"] = element.key;
        this.timeScheduleList.push(b as TimeSchdule)
      })
    })
    // this.timeSchdule = this.db.object('/timeSchdule')
    // this.timeSchdule.snapshotChanges()
    // .subscribe(snap => {
    //   this.timeScheduleList = []
    //   this.timeScheduleList.push(snap.payload.val())
    // })
  }

  ngOnInit() {
    this.schdulr = this.db.object('/schdulr')
    this.schdulr.snapshotChanges()
    .subscribe(snap => {
      this.schdulrList = []
      this.schdulrList.push(snap.payload.val())
    })
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

 onSubmit(schdularForm: NgForm) {
  if(schdularForm.value.$key == null)
    this.schdulrservice.insertSchedular(schdularForm.value)
  else 
    this.schdulrservice.updateSchedular(schdularForm.value)
 }



  logout() {
    this.authservice.signout();
  }

  onUpdateTime(tim: TimeSchdule) {
    this.schdulrservice.selectedTime = Object.assign({}, tim)
    this.router.navigate(['/schdules'])
  }


  onUpdate(schd: Schdulr) {
    this.schdulrservice.selectedSchdulr = Object.assign({}, schd)
  }

  resetForm(schdularForm?: NgForm) {
    if(schdularForm != null) {
      schdularForm.reset()
    }
    this.schdulrservice.selectedSchdulr = {
      $key: null,
      title: '',
      annoucement: ''
    }
  }
}
