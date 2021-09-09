import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import firebase from 'firebase/app';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { 
    auth.authState.subscribe( user => {
      console.log(user);
    })
  }

  login(user: string, pass: string){
    return this.auth.signInWithEmailAndPassword(user, pass);
  }
  
  registrar(user: string, pass: string){
    return this.auth.createUserWithEmailandPassword(user, pass);
  }

  logOut(){
    return this.auth.signOut();
  }

  verificarEmail(){
    this.auth.currentUser.then(user => {
      if(user){
        user.sendEmailVerification();
      }
    })
  }

  googleAuth(){
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
