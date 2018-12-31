import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,private afauth: AngularFireAuth, private db: AngularFireDatabase) { }

  getUser() {
    this.afauth.authState.subscribe((user) => {
      if(user) {
        this.db.list(`/users/${user.uid}`).snapshotChanges(['child_added'])
        .subscribe(snap => {
          snap.forEach(snapshot => {
            if(snapshot.payload.val()['usertype'] === "employee") {
              this.router.navigate(['/employee'])
            }
            else if(snapshot.payload.val()['usertype'] === "manager") {
              this.router.navigate(['/manager'])
            }
            else {
              this.router.navigate(['/login'])
            }
          })
        })
      }
    })
  }

  signup(user) {
 return this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then((success) => {
      let uid = this.afauth.auth.currentUser.uid
      this.db.list(`/users/${uid}`).push({
        username: user.username,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
        usertype: user.usertype
      })
      this.router.navigate(['/login'])
    })
    .catch((error) => {
      alert(error)
      console.log(error)
    })
  }

  signin(user) {
    return  this.afauth.auth.signInWithEmailAndPassword(user.email, user.password)
    .then((success) => {
      let adminuid = this.afauth.auth.currentUser.uid
      if(adminuid === "4dUcTvKrWSh3NFD2lFhhHLSRAPu2") {
        this.router.navigate(['/admin'])
      } else {
        this.getUser();
      }
      
    })
    .catch((error) => {
      alert(error)
      console.log(error)
    })
  }

  googleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.afauth.auth.signInWithPopup(provider)
    .then((success) => {
      this.router.navigate(['/employee'])
    })
    .catch((error) => {
      alert(error)
    })
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.afauth.auth.signInWithPopup(provider)
    .then((success) => {
      this.router.navigate(['/employee'])
    })
    .catch((error) => {
      alert(error)
    })
  }

  AnonmyouslyLogin() {
    return this.afauth.auth.signInAnonymously()
    .then((success) => {
      this.router.navigate(['/employee'])
    })
    .catch((error) => {
      alert(error)
    })
  }

  forgotPassword(user) {
    return this.afauth.auth.sendPasswordResetEmail(user.email)
    .then((success) => {
    })
    .catch((error) => {
      alert(error)
    })
  } 

  signout() {
    return this.afauth.auth.signOut()
    .then((success) => {
      this.router.navigate(['/login'])
    })
    .catch((error) => {
      alert(error)
    })
  }
}
