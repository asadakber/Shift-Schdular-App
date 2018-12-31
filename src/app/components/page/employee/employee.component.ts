import { Component, OnInit, Input } from '@angular/core';
import { SchdularService } from '../../../providers/schdular.service';
import { Schdulr } from '../../../class/schdulr';
import { AuthService } from '../../../providers/auth.service';
import { AngularFireDatabase ,AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Employee } from '../../../class/employee';
import { EmployeeService } from '../../../providers/employee.service';
import { TimeSchdule } from '../../../class/time-schdule';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  schdulrList: Schdulr[];
  schdulr: AngularFireObject<any>;
  employee: AngularFireList<any>;
  employeeList: Employee[];
  timeScheduleList: TimeSchdule[];
  timeSchdule: AngularFireObject<any>;
  constructor(private schdularService: SchdularService,private employeeservice: EmployeeService,private db: AngularFireDatabase,private authservice: AuthService) { 
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

  ngOnInit() {
    this.schdulr = this.db.object('/schdulr')
    this.schdulr.snapshotChanges()
    .subscribe(snap => {
      this.schdulrList = []
      this.schdulrList.push(snap.payload.val())
    })
    var x = this.schdularService.getSchdule();
    x.snapshotChanges().subscribe(item => {
      this.timeScheduleList = []
      item.forEach(element => {
        var y = element.payload.toJSON()
        y["$key"] = element.key;
        this.timeScheduleList.push(y as TimeSchdule)
      })
    })
  }

  logout() {
    this.authservice.signout();
  }

}
