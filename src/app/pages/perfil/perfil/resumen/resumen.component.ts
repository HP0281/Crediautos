import { Component, OnInit } from '@angular/core';
import { Preguntas } from 'src/app/models/preguntas.inteface';
import { PreguntasService } from 'src/app/services/preguntas/preguntas.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  public preguntas: Preguntas[];

  constructor(private _preguntaService: PreguntasService) {
    this._preguntaService.preguntas.subscribe(resp => {
      resp = this.preguntas;
      console.log(resp)
      
    })
   }

  ngOnInit(): void {
  }

}
