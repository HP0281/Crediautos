import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import firebase from 'firebase/app';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _userinfo: any;
  
  constructor(private auth: AngularFireAuth) { 
    auth.authState.subscribe( user => {
      this._userinfo = user;
      localStorage.setItem('userid', this._userinfo.uid);
      console.log(user);
    })
  }
  getUser(){

      return this.auth.authState;
   
  }
  login(user: string, pass: string){
    return this.auth.auth.signInWithEmailAndPassword(user, pass);
  }
  
  registrar(user: string, pass: string){
    return this.auth.auth.createUserWithEmailAndPassword(user, pass);
  }

  logOut(){
    return this.auth.auth.signOut();
  }

  verificarEmail(){
    
      if(this.auth.auth.currentUser){
        this.auth.auth.currentUser.sendEmailVerification();
      }
    
  }

  googleAuth(){
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  enviarcodigoTel(numero:string, appVerified:any){
    return this.auth.auth.signInWithPhoneNumber(numero, appVerified).then(confimation =>{

    });
  }
  authFacebook(){
    this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  
}
