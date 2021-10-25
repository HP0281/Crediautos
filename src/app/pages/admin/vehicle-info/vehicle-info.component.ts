import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { VehicleInfoService } from 'src/app/services/vehicle/vehicle-info.service';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {

   vehicleForm: FormGroup; 

   categorias:any[];
  constructor(private fb: FormBuilder, private categoriaService: CategoriesService,
    private vehicle: VehicleInfoService) {
    this.initForm();
    this.getCategorias();
  }

  ngOnInit(): void {
  }
  
  initForm(){
  this.vehicleForm= this.fb.group({
    marca: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    puertas: new FormControl('', [Validators.required]),
    carroceria: new FormControl('',[Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    trasmision: new FormControl('', [Validators.required]),
    traccion: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    combustible: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    version: new FormControl('', [Validators.required]),
    gps: new FormControl(''),
      asientotabatible: new FormControl(''),
      techocorredizo: new FormControl(''),
      climatizador: new FormControl(''),
      portaequipajet: new FormControl(''),
      camarareversa: new FormControl(''),
      banca: new FormControl(''),
      abs: new FormControl(''),
      alarma: new FormControl(''),
      exploradorasd: new FormControl(''),
      airbag: new FormControl(''),
      sensorlluvia: new FormControl(''),
      exploradorast: new FormControl(''),
      desempañadort: new FormControl(''),
      barraantivuelco: new FormControl(''),
      ctrestabilidad: new FormControl(''),
      blindado: new FormControl(''),
      vidrioseg: new FormControl(''),
      aireacondicionado: new FormControl(''),
      regalturavolante: new FormControl(''),
      retrovisorelectrico: new FormControl(''),
      luzregautomatica: new FormControl(''),
      tapizadocuero: new FormControl(''),
      tapizadosemicuero: new FormControl(''),
      tapizadotela: new FormControl(''),
      sensorparqueo: new FormControl(''),
      vidrioselect: new FormControl(''),
      baulremoto: new FormControl(''),
      asientoelectricos: new FormControl(''),
      puertascentralizado: new FormControl(''),
      manuales: new FormControl(''),
      cierrevidriosauto: new FormControl(''),
      bluetooth: new FormControl(''),
      dvd: new FormControl(''),
      repmp3: new FormControl(''),
      entradausb: new FormControl(''),
      eds: new FormControl(''),
      cubiertaplaton: new FormControl(''),
      plana: new FormControl(''),
      estribos: new FormControl(''),
      exploradoras: new FormControl(''),
      llantasn: new FormControl(''),
      rineslujo: new FormControl(''),
      spoiler: new FormControl(''),
      garfabrica: new FormControl(''),
      garmecanica: new FormControl(''),
      negociable: new FormControl(''),
      venpermuta: new FormControl(''),
      domicilio: new FormControl(''),
      testdrivD: new FormControl(''),
      dochome: new FormControl(''),
      desc: new FormControl(''),

  })
  }
  asignarvalue(nomvar: string, valor: any){
    switch (nomvar) {
      case 'gps': this.vehicleForm.get('gps').setValue(valor);  break;
      case 'asientotabatible':  this.vehicleForm.get('asientotabatible').setValue(valor);  break;
      case 'techocorredizo':  this.vehicleForm.get('techocorredizo').setValue(valor);  break;
      case 'climatizador':  this.vehicleForm.get('climatizador').setValue(valor);  break;
      case 'portaequipajet':  this.vehicleForm.get('portaequipajet').setValue(valor);  break;
      case 'camarareversa':  this.vehicleForm.get('camarareversa').setValue(valor);  break;
      case 'banca':  this.vehicleForm.get('banca').setValue(valor);  break;
      case 'abs':  this.vehicleForm.get('abs').setValue(valor);  break;
      case 'alarma':  this.vehicleForm.get('alarma').setValue(valor);  break;
      case 'exploradorasd':  this.vehicleForm.get('exploradorasd').setValue(valor);  break;
      case 'airbag':  this.vehicleForm.get('airbag').setValue(valor);  break;
      case 'sensorlluvia':  this.vehicleForm.get('sensorlluvia').setValue(valor);  break;
      case 'exploradorast':  this.vehicleForm.get('exploradorast').setValue(valor);  break;
      case 'desempañadort':  this.vehicleForm.get('desempañadort').setValue(valor);  break;
      case 'barraantivuelco':  this.vehicleForm.get('barraantivuelco').setValue(valor);  break;
      case 'ctrestabilidad':  this.vehicleForm.get('ctrestabilidad').setValue(valor);  break;
      case 'blindado':  this.vehicleForm.get('blindado').setValue(valor);  break;
      case 'aireacondicionado':  this.vehicleForm.get('aireacondicionado').setValue(valor);  break;
      case 'vidrioseg':  this.vehicleForm.get('vidrioseg').setValue(valor);  break;
      case 'regalturavolante':  this.vehicleForm.get('regalturavolante').setValue(valor);  break;
      case 'retrovisorelectrico':  this.vehicleForm.get('retrovisorelectrico').setValue(valor);  break;
      case 'luzregautomatica':  this.vehicleForm.get('luzregautomatica').setValue(valor);  break;
      case 'tapizadocuero':  this.vehicleForm.get('tapizadocuero').setValue(valor);  break;
      case 'tapizadosemicuero':  this.vehicleForm.get('tapizadosemicuero').setValue(valor);  break;
      case 'tapizadotela':  this.vehicleForm.get('tapizadotela').setValue(valor);  break;
      case 'sensorparqueo':  this.vehicleForm.get('sensorparqueo').setValue(valor);  break;
      case 'vidrioselect':  this.vehicleForm.get('vidrioselect').setValue(valor);  break;
      case 'baulremoto':  this.vehicleForm.get('baulremoto').setValue(valor);  break;
      case 'asientoelectricos':  this.vehicleForm.get('asientoelectricos').setValue(valor);  break;
      case 'puertascentralizado':  this.vehicleForm.get('puertascentralizado').setValue(valor);  break;
      case 'manuales':  this.vehicleForm.get('manuales').setValue(valor);  break;
      case 'cierrevidriosauto':  this.vehicleForm.get('cierrevidriosauto').setValue(valor);  break;
      case 'bluetooth':  this.vehicleForm.get('bluetooth').setValue(valor);  break;
      case 'dvd':  this.vehicleForm.get('dvd').setValue(valor);  break;
      case 'repmp3':  this.vehicleForm.get('repmp3').setValue(valor);  break;
      case 'entradausb':  this.vehicleForm.get('entradausb').setValue(valor);  break;
      case 'eds':  this.vehicleForm.get('eds').setValue(valor);  break;
      case 'cubiertaplaton':  this.vehicleForm.get('cubiertaplaton').setValue(valor);  break;
      case 'plana':  this.vehicleForm.get('plana').setValue(valor);  break;
      case 'estribos':  this.vehicleForm.get('estribos').setValue(valor);  break;
      case 'exploradoras':  this.vehicleForm.get('exploradoras').setValue(valor);  break;
      case 'llantasn':  this.vehicleForm.get('llantasn').setValue(valor);  break;
      case 'rineslujo':  this.vehicleForm.get('rineslujo').setValue(valor);  break;
      case 'spoiler':  this.vehicleForm.get('spoiler').setValue(valor);  break;
      case 'garfabrica':  this.vehicleForm.get('garfabrica').setValue(valor);  break;
      case 'garmecanica':  this.vehicleForm.get('garmecanica').setValue(valor);  break;
      case 'negociable':  this.vehicleForm.get('negociable').setValue(valor);  break;
      case 'venpermuta':  this.vehicleForm.get('venpermuta').setValue(valor);  break;
      case 'domicilio':  this.vehicleForm.get('domicilio').setValue(valor);  break;
      case 'testdrivD':  this.vehicleForm.get('testdrivD').setValue(valor);  break;
      case 'dochome':  this.vehicleForm.get('dochome').setValue(valor);  break;
      case 'marca' : this.vehicleForm.get('marca').setValue(valor); break;
      case 'modelo' : this.vehicleForm.get('modelo').setValue(valor); break;
      case 'year' : this.vehicleForm.get('year').setValue(valor); break;
      case 'puertas' : this.vehicleForm.get('puertas').setValue(valor); break;
      case 'version' : this.vehicleForm.get('version').setValue(valor); break;
      case 'modelo' : this.vehicleForm.get('modelo').setValue(valor); break;
      
      
      default:
        break;
      }
  }
  getCategorias(){
    this.categoriaService.categories.subscribe((resp:any) =>{
      this.categorias = resp;
    })
  }
  onGuardar(){
   this.vehicle.onSaveVehicle(this.vehicleForm.value, null);
   console.log(this.vehicleForm.value)
  }
}
