import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ImageService } from 'src/app/services/image/image.service';
import { UserService } from 'src/app/services/user/user.service';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { WindowService } from 'src/app/services/windows.service';
import { DireccionesComponent } from '../direcciones/direcciones.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  direccions: any[] = [];
  userForm: FormGroup;
  hasDireccion = false;
  correo: string;
  userExist: boolean;

  infr: boolean;
  vehicle: any;
  windowsReferencia;
  disableSignUpBtn = false;

  isVehicle = true;

  //cedula
  uploadProgress: Observable<number>;
  uploadProgress1: Observable<number>;
  uploadURL: Observable<string>;

  constructor(private fb: FormBuilder,
    private userSv: UserService,
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router,
    private authservice: AuthService,
    private win: WindowService,
    private readonly storageSvc: ImageService,
    private _storage: AngularFireStorage,
    private vehicleSV: VehiclesService,
    private articuloSv: ArticuloService) {
    this.infr = true;
    const navigation = this.router.getCurrentNavigation();
    this.vehicle = navigation.extras?.state?.value;
    this.isVehicle = navigation.extras?.state?.isVehiculo;
  }
  ngOnInit(): void {

    if (!localStorage.userid) {
      this.userSv.getEmailById(localStorage.getItem('userid')).subscribe(resp =>{
        if (resp[0].validada) {
          this.router.navigate(['/inicio']);
        }
      })
    }
    this.initForm();
    this.windowsReferencia = this.win.windowRef;
    firebase.auth().languageCode = 'es';
    this.windowsReferencia.recaptchaVerifier1 = new firebase.auth.RecaptchaVerifier('recaptcha1', {
      'size': 'normal',
      'callback': (resp) => {
        this.disableSignUpBtn = resp
      },
      'expired-callback': function () {
        this.disableSignUpBtn = false;
        console.log("no entara en el callback");
      }

    });
    this.windowsReferencia.recaptchaVerifier1.render();
  }

  initForm() {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      typeDoc: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      urlAnverso: new FormControl('', ),
      urlReverso: new FormControl('', ),
      direcciones: this.fb.array([]),
      telefono: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      clave: new FormControl(''),
      validada: new FormControl(true)
    })
  }


  uploadImg(event, isAnverso: boolean) {
    const file = event.target.files[0];
    const randomId = Math.random().toString(36).substring(2);
    const filepath = `images/${randomId}`;
    const fileref = this._storage.ref(filepath);
    const task = this._storage.upload(filepath, file);
    if (isAnverso) {
      this.uploadProgress = task.percentageChanges();
    } else {
      this.uploadProgress1 = task.percentageChanges();
    }

    task.snapshotChanges().pipe(
      finalize(() => {
        this.uploadURL = fileref.getDownloadURL();
        this.uploadURL.subscribe((resp: any) => {
          if (isAnverso) {
            this.userForm.get('urlAnverso').setValue(resp);
          } else {
            this.userForm.get('urlReverso').setValue(resp);
          }
        })
      }
      )
    ).subscribe();
  }

  get direcciones() {
    return this.userForm.get('direcciones') as FormArray;
  }

  agregarDireccion() {
    if (!this.hasDireccion) {
      const dialogref = this.dialog.open(DireccionesComponent, {
        width: '250px',

      });
      dialogref.afterClosed().subscribe(result => {
        if (result) {
          this.addDireccion(result.name, result.descripcion, result.ciudad);
        }
        console.log('cerro el dialog' + JSON.stringify(result));
      })
    }
  }
  addDireccion(name, desc, city) {
    const direccionForm = this.fb.group({
      name: name,
      descripcion: desc,
      ciudad: city
    })
    this.direcciones.push(direccionForm);
    this.direccions.push(direccionForm.value);
    this.hasDireccion = true;
  }
  editDireccion(name, desc, city) {
    const dialogref = this.dialog.open(DireccionesComponent, {
      width: '250px',
      data: {
        name: name,
        descripcion: desc,
        ciudad: city
      }
    });
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.direcciones.clear();
        this.direccions.shift();
        const direccionForm = this.fb.group({
          name: result.name,
          descripcion: result.descripcion,
          ciudad: result.ciudad
        })
        this.direcciones.push(direccionForm);
        this.direccions.push(direccionForm.value);
      }
    })
  }
  guardar() {
    if (this.disableSignUpBtn) {
      console.log("entra al if");
      if (this.userForm.valid) {
        /*this.authservice.enviarcodigoTel('+57' + this.userForm.get('telefono').value, this.windowsReferencia.recaptchaVerifier1).then(
          res => {
            console.log("respuesta2 :", res);
            if (res) {
              this.getEmail();
            }
           }
        );*/
        this.getEmail();
      } else {
        alert("llena todos los campos del formulario")
      }


    } else {
      alert("Verifica que no eres un robot");
    }

  }
  showInfo() {
    console.log(this.infr);
    this.infr = !this.infr;
  }
  getEmail() {
    let iduser = localStorage.getItem('userid');
    this.userSv.getEmailById(iduser).subscribe(resp => {
      if (resp.length > 0) {
        console.log('entra tiene user')
        this.vehicle.state = 'inactivo';
        this.userForm.get('email').setValue(localStorage.getItem('userEmail'));
        this.userForm.get('clave').setValue(resp[0].clave != null ? resp[0].clave : '' )
        let user: User = resp[0];
        this.userSv.onSaveUser(this.userForm.value, iduser).then(
          (resp) => {
            console.log("si guarda el usuario");
          }
        ).catch(err => console.log("error al guardar usuario", err));
        if (this.isVehicle) {
          let id = JSON.parse(localStorage.getItem('idVehicle'));
          this.vehicleSV.onSaveVehicle(this.vehicle, id);
        } else {
          let id = JSON.parse(localStorage.getItem('idArticulo'));
          this.articuloSv.onSaveArticulo(this.vehicle, id)
        }
        this.router.navigate(['/inicio']);
        alert('Registro creado con exito');
        this.userExist = true;
      } else {
        this.userExist = false;
        this.vehicle.state = 'inactivo';
        this.userForm.get('email').setValue(localStorage.getItem('userEmail'));
        this.userSv.onSaveUser(this.userForm.value, localStorage.getItem('userid'));
        if (this.isVehicle) {
          let id = JSON.parse(localStorage.getItem('idVehicle'));
          this.vehicleSV.onSaveVehicle(this.vehicle, id);
        } else {
          let id = JSON.parse(localStorage.getItem('idArticulo'));
          this.articuloSv.onSaveArticulo(this.vehicle, id)
        }
        this.router.navigate(['/inicio']);
        alert('Registro creado con exito');
        this.userExist = true;
      }
    })
  }
}  
