import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Schdulr } from '../class/schdulr';
import { TimeSchdule } from '../class/time-schdule';

@Injectable({
  providedIn: 'root'
})
export class SchdularService {
 
  schdulrList: AngularFireObject<any>
//  schdular: AngularFireList<any> 
  selectedSchdulr: Schdulr = new Schdulr();
  timeSchduleList: AngularFireList<any>
  selectedTime: TimeSchdule = new TimeSchdule();
  
  constructor(private db: AngularFireDatabase) {
      this.schdulrList = this.db.object('/schdulr')
      this.timeSchduleList = this.db.list('/timeSchdule')
   }

   insertSchedular(schdulr: Schdulr) {
     this.schdulrList.set({
       title: schdulr.title,
       annoucement: schdulr.annoucement
     })
   }

   AddTmeSchdule(timeschdule: TimeSchdule) {
    this.timeSchduleList.push({
      name: timeschdule.name,
      monday: timeschdule.monday,
      tuesday: timeschdule.tuesday,
      wednesday: timeschdule.wednesday,
      thursday: timeschdule.thursday,
      friday: timeschdule.friday,
      saturday: timeschdule.saturday,
      sunday: timeschdule.sunday,
    })
   }

   updateTimeSchdule(timeschdule: TimeSchdule) {
    this.timeSchduleList.update(timeschdule.$key, {
      name: timeschdule.name,
      monday: timeschdule.monday,
      tuesday: timeschdule.tuesday,
      wednesday: timeschdule.wednesday,
      thursday: timeschdule.thursday,
      friday: timeschdule.friday,
      saturday: timeschdule.saturday,
      sunday: timeschdule.sunday,
    })
   }

   getSchdule() {
     return this.timeSchduleList
   }

   updateSchedular(schdulr: Schdulr) {
     this.schdulrList.update({
      title: schdulr.title,
      annoucement: schdulr.annoucement
     })
   }

   RemoveSchedular($key: string) {
    this.timeSchduleList.remove($key)
  }

   deleteSchedular() {
     this.schdulrList.remove()
   }
}
