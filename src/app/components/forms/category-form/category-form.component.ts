import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  
  categoryForm: FormGroup;

  constructor(private categoryService: CategoriesService, private fb: FormBuilder) {
    this.initForm();
   }

  ngOnInit(): void {
  }
  
  onGuardar(){
    if (this.categoryForm.valid) {
      this.categoryService.onSaveCategory(this.categoryForm.value, null);
    }
  }

  initForm(){
    this.categoryForm = this.fb.group({
      name: new FormControl('', [Validators.required])
    })
  }
}
