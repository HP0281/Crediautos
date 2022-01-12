import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from 'src/app/models/marca.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  marcas: Observable<Marca[]>;

  private marcaCollection : AngularFirestoreCollection<Marca>;

  constructor(private readonly afs: AngularFirestore)  { 
    this.marcaCollection = afs.collection<Marca>('marcas', ref =>
      ref.orderBy("name")
    );
    this.getMarcas();
  }

  onDeleteMarca(categoryId: string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const result = this.marcaCollection.doc(categoryId).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
 }
 onSaveMarca(marca:Marca, marcaId: string): Promise<void>{
  return new Promise(async (resolve, reject) => {
    try {
      const id = marcaId || this.afs.createId();
      const data = {id, ...marca};
      const result = await this.marcaCollection.doc(id).set(data);
      resolve(result);
    } catch (error) {
      reject(error.message);
    }
  })
 }
 private getMarcas(){
   console.log('get marcas')
    this.marcas = this.marcaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Marca))
   );
 }
 public async getMarcasOrden  (limite: number, categoria){
  this.marcaCollection =  await this.afs.collection<Marca>('marcas', ref =>
  ref.where('category','==',categoria).orderBy("name")
  );
  let m;
  return m = this.marcaCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => a.payload.doc.data() as Marca))
 );;
 }
  getMarcaByName(name:string){
    return this.afs.collection(('marcas'), ref => ref.where('name','==', name)).valueChanges().pipe(
      map(actions => actions.map(a => a as Marca))
    );
  }
  getMarcaByCategoria(name:string){
    return this.afs.collection(('marcas'), ref => ref.where('category','==', name)).valueChanges().pipe(
      map(actions => actions.map(a => a as Marca))
    );
  }
}
