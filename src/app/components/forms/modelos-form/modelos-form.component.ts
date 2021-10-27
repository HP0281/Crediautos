import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MarcasService } from 'src/app/services/marcas/marcas.service';

@Component({
  selector: 'app-modelos-form',
  templateUrl: './modelos-form.component.html',
  styleUrls: ['./modelos-form.component.css']
})
export class ModelosFormComponent implements OnInit {

  marcas: any[];
  modeloForm: FormGroup;

  constructor(private fb: FormBuilder, private marcaService: MarcasService) { 
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
    
  }
}
