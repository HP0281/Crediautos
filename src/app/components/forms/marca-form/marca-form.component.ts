import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MarcasService } from 'src/app/services/marcas/marcas.service';

@Component({
  selector: 'app-marca-form',
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.css']
})
export class MarcaFormComponent implements OnInit {
  
  marcaForm: FormGroup;

  constructor(private fb: FormBuilder, private marcaService: MarcasService) {
    this.initForm();
   }

  ngOnInit(): void {
  }
  initForm(){
    this.marcaForm = this.fb.group({
      name: new FormControl('', [Validators.required])
    })
  }
  onGuardar(){
    if (this.marcaForm.valid) {
      this.marcaService.onSaveMarca(this.marcaForm.value, null);
    }
  }
}
