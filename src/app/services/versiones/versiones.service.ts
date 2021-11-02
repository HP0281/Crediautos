import { Version } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VersionesService {
  versiones: Observable<Version[]>;

  private versionCollection : AngularFirestoreCollection;

  constructor(private readonly afs: AngularFirestore) {
    this.versionCollection = afs.collection<Version>('versiones');
    this.getVersiones();
   }

   
  onDeleteVersion(versionId: string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const result = this.versionCollection.doc(versionId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
 }
 onSaveVersion(version:Version, versionId: string): Promise<void>{
  return new Promise(async (resolve, reject) => {
    try {
      const id = versionId || this.afs.createId();
      const data = {id, ...version};
      const result = await this.versionCollection.doc(id).set(data);
      resolve(result);
    } catch (error) {
      reject(error.message);
    }
  })
 }
 private getVersiones():void{
   console.log('get marcas')
   this.versiones = this.versionCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Version))
   );
 }
 getVersionesforMarcaModelo(marca:string, modelo:string){
  return this.afs.collection(('versiones'), ref => ref.where('marca', '==', marca).where('modelo','==', modelo)).valueChanges();
}
}
