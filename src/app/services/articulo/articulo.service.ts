import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from 'src/app/models/articulo.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  articules: Observable<Articulo[]>;

  private vehicleCollection: AngularFirestoreCollection<Articulo>;

  constructor(private readonly afs: AngularFirestore) {
    this.vehicleCollection = afs.collection<Articulo>('articulos');
    this.getArticulos();
   }

  onDeleteArticulos(vehicleid: string): Promise<void>{
  return new Promise(async (resolve, reject)=>{
    try {
      const result = await this.vehicleCollection.doc(vehicleid).delete();
      resolve(result);
    } catch (error) {
      reject(error.message);
    }
  });
  }
  onSaveArticulo(vehicle: Articulo, vechicleId: string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const id = vechicleId || this.afs.createId();
        localStorage.setItem('idArticulo', JSON.stringify(id));
        const data = {id, ...vehicle };
        const result = await this.vehicleCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }
  private getArticulos(): void{
    this.articules = this.vehicleCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Articulo))
    );
  }
  getArticulosById(id:string){
    return this.afs.collection(('articules'), ref => ref.where('vendedor','==', id)).valueChanges();
  }
  getArticuloById(id:string){
    return this.afs.collection(('articulos'), ref => ref.where('id','==', id)).valueChanges().pipe(
      map(actions => actions.map(a => a as Articulo))
    );
  }
  getArticuloByPromo(){
    return this.afs.collection(('articulos'), ref => ref.where('promocion','==', true).where('status', '==', true )).valueChanges().pipe(
      map(actions => actions.map(a => a as Articulo))
    );
  }
}
