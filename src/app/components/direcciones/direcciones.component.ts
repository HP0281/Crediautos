import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {
  direccionForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<DireccionesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  this.direccionForm = this.fb.group({
    name: new FormControl('',[Validators.required]),
    descripcion: new FormControl('',[Validators.required]),
    ciudad: new FormControl('',[Validators.required])
  })
  this.data.name != null ? this.direccionForm.get('name').setValue(this.data.name) : this.direccionForm.get('name').setValue('');
  this.data.descripcion != null ? this.direccionForm.get('descripcion').setValue(this.data.descripcion) : this.direccionForm.get('descripcion').setValue('');
  this.data.ciudad != null ? this.direccionForm.get('ciudad').setValue(this.data.ciudad) : this.direccionForm.get('ciudad').setValue('');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onGuardar(){
    this.dialogRef.close({
      name: this.direccionForm.get('name').value,
      descripcion: this.direccionForm.get('descripcion').value,
      ciudad: this.direccionForm.get('ciudad').value
    });
  }
}
