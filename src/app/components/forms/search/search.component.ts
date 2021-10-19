import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.interface';
import { Marca } from 'src/app/models/marca.interface';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { MarcasService } from 'src/app/services/marcas/marcas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categorias: Category[];
  marcas: Marca[];

  constructor(private router: Router, private categoriesService: CategoriesService,
    private marcasService: MarcasService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getMarcas();
    const category = {
      nombre: "texla"
    }
    this.marcasService.onSaveMarca(category, undefined);
  }
  buscar(){
    this.router.navigate(['/buscar']);
  }
  getCategories(){
    this.categoriesService.categories.subscribe((res:any) => this.categorias = res,
    (err:any) => console.error('ha ocurrido un error'));
  }
  getMarcas(){
    this.marcasService.marcas.subscribe((res:any) => this.marcas = res,
    (err:any) => console.error('ha ocurrido un error'));
  }
}
