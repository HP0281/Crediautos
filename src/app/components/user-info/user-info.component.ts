import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { DireccionesComponent } from '../direcciones/direcciones.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  direccions: any[]=[];
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder, 
    private userSv: UserService,
    private authService: AuthService,
    public dialog: MatDialog){

  }
  ngOnInit(): void {
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
    const dialogref = this.dialog.open(DireccionesComponent, {
      width: '250px',
      data: {
        name: "holis"
      }
    });
    dialogref.afterClosed().subscribe(result =>{
      console.log('cerro el dialog');
    })
  }
  addDireccion(){
    const direccionForm = this.fb.group({
      name: '',
      descripcion: '',
      ciudad:''
    })
  }
}  
