import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MarcasService } from 'src/app/services/marcas/marcas.service';
import { ModelosService } from 'src/app/services/modelos/modelos.service';

@Component({
  selector: 'app-modelos-form',
  templateUrl: './modelos-form.component.html',
  styleUrls: ['./modelos-form.component.css']
})
export class ModelosFormComponent implements OnInit {

  marcas: any[];
  modeloForm: FormGroup;

  constructor(private fb: FormBuilder, private marcaService: MarcasService,
    private modelosService: ModelosService) { 
    this.marcaService.marcas.subscribe((resp:any)=>{
      this.marcas = resp;
      console.log(resp)
    })
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(){
    this.modeloForm = this.fb.group({
      marca: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    })
  }
  onGuardar(){
    if (this.modeloForm.valid) {
      this.modelosService.onSaveModelo(this.modeloForm.value, null);
    }
  }
}
