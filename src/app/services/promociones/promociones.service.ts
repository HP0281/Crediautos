import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Promocion } from '../../models/promocion.interface';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {
  promos: Observable<any[]>;

  private promocioncollection: AngularFirestoreCollection<Promocion>;
 
  constructor(private readonly afs: AngularFirestore) {
    this.promocioncollection = afs.collection<Promocion>('promociones');
    
    this.getPromos();
    
   }

  onDeletePromo(promocionid: string): Promise<void>{
  return new Promise(async (resolve, reject)=>{
    try {
      const result = await this.promocioncollection.doc(promocionid).delete();
      resolve(result);
    } catch (error) {
      reject(error.message);
    }
  });
  }
  onSavePromo(promo: Promocion, promoId?: string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const id = promoId || this.afs.createId();
        const data = {id, ...promo };
        const result = await this.promocioncollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }
  
  private getPromos(): void{
    this.promos = this.promocioncollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as any))
     );
  }
  getpromoById(id:string){
    return this.afs.collection(('promociones'), ref => ref.where('id', '==', id)).valueChanges();
  }
  
}