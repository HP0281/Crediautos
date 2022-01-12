import { Component, OnInit } from '@angular/core';
import { Promocion } from 'src/app/models/promocion.interface';
import { PromocionesService } from 'src/app/services/promociones/promociones.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  promos: Promocion[];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,"arrows":true, "infinite": true, "autoplay": true, };
  constructor(private promosionService: PromocionesService) { 
    promosionService.promos.subscribe(res=>{
      this.promos = res;
    })
  }

  ngOnInit(): void {
    this.scrollSlide();

  }
  scrollSlide(){
    const filapromo = document.querySelector('.contenedor-carrousel');
    const anchopromo = document.querySelector('.contenedor-carrousel').clientWidth;
    const publicaciones = document.querySelector('.publicacionPromo');
    const flechaizquierda = document.querySelector('.flecha-izquierda');
    const flechaderecha = document.querySelector('.flecha-derecha');
    console.log(anchopromo);
    flechaizquierda.addEventListener('click', () => {
   filapromo.scrollLeft -= anchopromo;
    console.log('clickizuiqerda');
    });

    flechaderecha.addEventListener('click', () => {
   filapromo.scrollLeft += anchopromo;
    });
    
  }
}
