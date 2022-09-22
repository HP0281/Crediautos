import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { UserService } from '../user/user.service';
import { WindowService } from '../windows.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _userinfo: any;
  public windowsReferencia;
  public token;
  constructor(private auth: AngularFireAuth,
    public win: WindowService,
    private userservice: UserService,) {
    auth.authState.subscribe(user => {
      this._userinfo = user;
      localStorage.setItem('userid', user.uid);
      localStorage.setItem('userEmail', user.email);
    })
  }
  getUser() {

    return this.auth.authState;

  }
  login(user: string, pass: string) {
    return this.auth.auth.signInWithEmailAndPassword(user, pass).then( cred => {
      localStorage.setItem('cred', JSON.stringify(cred));
    }
      
    );
  }

  registrar(user: string, pass: string) {
    return this.auth.auth.createUserWithEmailAndPassword(user, pass).then( cred => {
      localStorage.setItem('cred', JSON.stringify(cred));
      return cred;
    } 
    );
  }

  logOut() {
    return this.auth.auth.signOut().then( cred => {
      localStorage.setItem('cred', JSON.stringify(cred));
    }
      
    );
  }

  verificarEmail() {

    if (this.auth.auth.currentUser) {
      this.auth.auth.currentUser.sendEmailVerification().then( cred => {
        localStorage.setItem('cred', JSON.stringify(cred));
      }
        
      );
    }


  }
  validacionPhone(user, appVerifier) {
    this.auth.auth.signInWithPhoneNumber("+57" + user.telefono, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        let code = window.prompt('Por favor ingrese el código de 6 dígitos que se envio al numero telefonico');
        confirmationResult.confirm(code).then(_ => {
          this.registrar(user.email, user.clave).then((resp) => {
            this.userservice.onSaveUser(user, resp.user.uid);
          })

        }).catch(error => {
          alert("codigo invalido vuelva a intetar")
        });
        // ...
      }).catch((error) => {
        alert("no se pudo enviar el codigo verifica el numero")
      });
  }

  googleAuth() {
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then( cred => {
      localStorage.setItem('cred', JSON.stringify(cred));
    }
      
    );
  }

  async enviarcodigoTel(numero: string, appVerified: any): Promise<boolean> {
    let resp = false;

    var phoneAuthProvider = new firebase.auth.PhoneAuthProvider();
    await phoneAuthProvider.verifyPhoneNumber(numero, appVerified)
      .then(async function (verificationId) {
        let code = window.prompt('Por favor ingrese el código de 6 dígitos que se envio al numero telefonico');
        var cred = await firebase.auth.PhoneAuthProvider.credential(
          verificationId, code);
        const credfinal = this.token;
        let fbWorkerAuth = firebase.auth();
        await fbWorkerAuth.signInWithCredential(cred)
          .then(async userCredentials => {
            console.log("valido de codigo");
            resp = true;
            let credd = JSON.parse( localStorage.getItem('cred'));

            fbWorkerAuth.signInWithCredential(credd.credential)
          })
          .catch(error => {
            resp = false;
            alert("Codigo Incorrecto")
          });
      }).catch(
        error => {
          resp = false;
          return resp
        }
      );
    console.log("respuest: ", resp);
    return resp
  }

  authFacebook() {
    this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then( cred => {
      localStorage.setItem('cred', JSON.stringify(cred));
    }
      
    );
  }

}
