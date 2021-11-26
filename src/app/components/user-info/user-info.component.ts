import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { DireccionesComponent } from '../direcciones/direcciones.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  direccions: any[]=[];
  userForm: FormGroup;
  hasDireccion = false;

  infr:boolean;
  vehicle:any;
  
  constructor(private fb: FormBuilder, 
    private userSv: UserService,
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router,
    private vehicleSV: VehiclesService){
      this.infr = true;
      const navigation = this.router.getCurrentNavigation();
      this.vehicle = navigation.extras?.state?.value;
  }
  ngOnInit(): void {
    if(!localStorage.userid){
      this.router.navigate(['/inicio']);
    }
    this.initForm();
  }

  initForm(){
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      typeDoc: new FormControl('',[Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      direcciones: this.fb.array([]),
      telefono: new FormControl('', [Validators.required])
    })
  }
  
  get direcciones(){
    return this.userForm.get('direcciones') as FormArray;
  }

  agregarDireccion(){
    if (!this.hasDireccion){
    const dialogref = this.dialog.open(DireccionesComponent, {
      width: '250px',
      
    });
    dialogref.afterClosed().subscribe(result =>{
      if (result) {
        this.addDireccion(result.name, result.descripcion, result.ciudad);
      }
      console.log('cerro el dialog'+JSON.stringify(result));
    })
    }
  }
  addDireccion(name, desc, city){
    const direccionForm = this.fb.group({
      name: name,
      descripcion: desc,
      ciudad: city
    })
    this.direcciones.push(direccionForm);
    this.direccions.push(direccionForm.value);
    this.hasDireccion = true;
  }
  editDireccion(name, desc, city){
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
  guardar(){
    this.vehicle.state = 'inactivo';
    this.userSv.onSaveUser(this.userForm.value, localStorage.getItem('userid'));
    this.vehicleSV.onSaveVehicle(this.vehicle, this.vehicle.id);
    alert('Registro creado con exito');
  }
  showInfo(){
    console.log(this.infr);
    this.infr = !this.infr;
  }
}  
