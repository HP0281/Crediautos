import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import firebase from 'firebase/app';
import * as firebase from 'firebase';
import { UserService } from '../user/user.service';
import { WindowService } from '../windows.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _userinfo: any;
  public windowsReferencia;
  constructor(private auth: AngularFireAuth, public win: WindowService, private userservice: UserService,) { 
    this.windowsReferencia
    auth.authState.subscribe( user => {
      this._userinfo = user;
      localStorage.setItem('userid', this._userinfo.uid);
      localStorage.setItem('userEmail', this._userinfo.email);
      console.log(this._userinfo);
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
  validacionPhone(user, appVerifier){
    this.auth.auth.signInWithPhoneNumber("+57"+user.telefono, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      let code = window.prompt('Please enter the 6 digit code');
      confirmationResult.confirm(code).then(_ =>{
        this.registrar(user.email, user.clave).then(()=>{
          this.userservice.onSaveUser(user);
        })
        
      }).catch(error=>{
        alert("codigo invalido vuelva a intetar")
      });
      // ...
    }).catch((error) => {
      alert("no se pudo enviar el codigo verifica el numero")
    });
  }

  googleAuth(){
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  enviarcodigoTel(numero:string, appVerified:any){
    return this.auth.auth.signInWithPhoneNumber (numero, appVerified).then(confimation =>{

    });
  }
  authFacebook(){
    this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  
}
