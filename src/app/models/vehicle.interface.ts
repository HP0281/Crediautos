export interface Vehicle{
 _id?:string;
 numPuertas: number;
 precio: number;
 color: String;
 vendedor: String;
 tiendaoficial: Boolean;
 Ubicacion: String;
 tipoCarroceria: String;
 modelo: String;
 direccion: String;
 condicion: number;
 otrasCaracteristicas?: String[];
 kilometros: number;
 trasmision: number;
 traccion: number;
 marca: String;
 año: number;
 combustible: number;
 financiable: Boolean;
 tipoventa?: String;
 categoria: String;
 placa: String;
 unicodueño: boolean;
 gps?: boolean;
 asientotabatible?: boolean;
 techocorredizo?: boolean;
 climatizador?: boolean;
 portaequipajet?: boolean;
 camarareversa?: boolean;
 banca?: boolean;
 abs?: boolean;
 alarma?: boolean;
 exploradorasd?: boolean;
 airbag?: boolean;
 sensorlluvia?: boolean;
 exploradorast?: boolean;
 desempañadort?: boolean;
 barraantivuelco?: boolean;
 ctrestabilidad?: boolean;
 blindado?: boolean;
 aireacondicionado?: boolean;
 regalturavolante?: boolean;
 retrovisorelectrico?: boolean;
 luzregautomatica?: boolean;
 tapizadocuero?: boolean;
 tapizadosemicuero?: boolean;
 tapizadotela?: boolean;
 sensorparqueo?: boolean;
 vidrioselect?: boolean;
 baulremoto?: boolean;
 asientoelectricos?: boolean;
 puertascentralizado?: boolean;
 manuales?: boolean;
 cierrevidriosauto?: boolean;
 bluetooth?: boolean;
 dvd?: boolean;
 repmp3?: boolean;
 entradausb?: boolean;
 cubiertaplaton?: boolean;
 estribos?: boolean;
 exploradoras?: boolean;
 rineslujo?: boolean;
 spoiler?: boolean;
 garfabrica?: boolean;
 garmecanica?: boolean;
 negociable?: boolean;
 venpermuta?: boolean;
 domicilio?: boolean;
 testdrivD?: boolean;
 dochome?: boolean;
}