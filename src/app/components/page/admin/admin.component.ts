import { Component, OnInit } from '@angular/core';
import { SchdularService } from '../../../providers/schdular.service';
import { Schdulr } from '../../../class/schdulr';
import { AuthService } from '../../../providers/auth.service';
import { AngularFireDatabase ,AngularFireObject, AngularFireList } from '@angular/fire/database';
import { EmployeeService } from '../../../providers/employee.service';
import { Employee } from '../../../class/employee';
import { TimeSchdule } from '../../../class/time-schdule';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  schdulrList: Schdulr[];
  schdulr: AngularFireObject<any>;
  employee: AngularFireList<any>;
  employeeList: Employee[];
  timeScheduleList: TimeSchdule[];
  timeSchdule: AngularFireObject<any>;
  constructor(private employeeservice: EmployeeService,private db: AngularFireDatabase,private authservice: AuthService,private schdulrservice: SchdularService) {
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
    var x = this.schdulrservice.getSchdule();
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

  onRemove() {
    if(confirm('Are you sure want to remove this contact?') === true) {
      this.schdulrservice.deleteSchedular()
    }
  } 

  onDelete(key: string) {
    if(confirm('Are you sure want to remove this contact?') === true) {
      this.employeeservice.deleteSchedular(key)
    }
  }

  Delete(key: string) {
    if(confirm('Are you sure want to remove this contact?') === true) {
      this.schdulrservice.RemoveSchedular(key)
    }
  }

}
