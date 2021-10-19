import { Injectable } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  publicaciones: Observable<Publicacion[]>;

  private publicacionCollection : AngularFirestoreCollection<Publicacion>;
  constructor(private readonly afs: AngularFirestore) {
    this.publicacionCollection = afs.collection<Publicacion>('Publicaciones');
    this.getPublicaciones();
   }
   onDeletePublicaciones(publicacionId: string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const result = this.publicacionCollection.doc(publicacionId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
 }
 onSavePublicaciones(publicacion:Publicacion, publicacionId: string): Promise<void>{
  return new Promise(async (resolve, reject) => {
    try {
      const id = publicacionId || this.afs.createId();
      const data = {id, ...publicacion};
      const result = await this.publicacionCollection.doc(id).set(data);
      resolve(result);
    } catch (error) {
      reject(error.message);
    }
  })
 }
 private getPublicaciones():void{
   this.publicaciones = this.publicacionCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Publicacion))
   );
 }
}
