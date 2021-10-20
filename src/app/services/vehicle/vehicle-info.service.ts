import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleInfo } from 'src/app/models/vehicleInfo.interface ';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleInfoService {
  vehicles: Observable<VehicleInfo[]>;

  private vehicleCollection: AngularFirestoreCollection<VehicleInfo>;

  constructor(private readonly afs: AngularFirestore) {
    this.vehicleCollection = afs.collection<VehicleInfo>('vehicleInfo');
    this.getVehicles();
   }

  onDeleteVehicles(vehicleid: string): Promise<void>{
  return new Promise(async (resolve, reject)=>{
    try {
      const result = await this.vehicleCollection.doc(vehicleid).delete();
      resolve(result);
    } catch (error) {
      reject(error.message);
    }
  });
  }
  onSaveVehicle(vehicle: VehicleInfo, vechicleId: string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const id = vechicleId || this.afs.createId();
        const data = {id, ...vehicle };
        const result = await this.vehicleCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }
  private getVehicles(): void{
    this.vehicles = this.vehicleCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as VehicleInfo))
    );
  }
  getVehiclesforMarca(marca:string){
    return this.afs.collection(('vehicleInfo'), ref => ref.where('marca', '==', marca)).valueChanges();
  }
  getVehiclesforMarcaModelo(marca:string, modelo:string){
    return this.afs.collection(('vehicleInfo'), ref => ref.where('marca', '==', marca).where('modelo','==', modelo)).valueChanges();
  }
}
