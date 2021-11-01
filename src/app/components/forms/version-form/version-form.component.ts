import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MarcasService } from 'src/app/services/marcas/marcas.service';
import { ModelosService } from 'src/app/services/modelos/modelos.service';
import { VersionesService } from 'src/app/services/versiones/versiones.service';

@Component({
  selector: 'app-version-form',
  templateUrl: './version-form.component.html',
  styleUrls: ['./version-form.component.css']
})
export class VersionFormComponent implements OnInit {
  
  marcas: any[];
  modelos: any[];

  versionForm: FormGroup;

  constructor(private fb: FormBuilder, private marcaService: MarcasService,
    private modeloService: ModelosService, private versionService: VersionesService) { 
      this.marcaService.marcas.subscribe((resp:any)=> {
        this.marcas = resp;
      });
      this.modeloService.modelos.subscribe((resp:any)=>{
        this.modelos = resp;
      });
      this.initForm();
    }

  ngOnInit(): void {
  }
  
  initForm(){
    this.versionForm = this.fb.group({
      name: new FormControl('',[Validators.required]),
      marca: new FormControl('',[Validators.required]),
      modelo: new FormControl('',[Validators.required])
    })
  }
  onGuardar(){
    if (this.versionForm.valid) {
      this.versionService.onSaveVersion(this.versionForm.value, null);
    }
  }
}
