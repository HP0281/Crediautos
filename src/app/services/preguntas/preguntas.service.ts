import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Preguntas } from 'src/app/models/preguntas.inteface';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  preguntas: Observable<Preguntas[]>;
  
  private preguntasCollection: AngularFirestoreCollection<Preguntas>;

  constructor(private readonly afs: AngularFirestore) {
    this.preguntasCollection = afs.collection<Preguntas>('preguntas');
    this.getPreguntas();
   }

   onDeletePreguntas(preguntaId: string): Promise<void>{
      return new Promise(async (resolve, reject ) => {
        try {
          const result = this.preguntasCollection.doc(preguntaId).delete();
          resolve(result);
        } catch (error) {
          reject(error.message);
        }
      });
   }
   onSavePreguntas(pregunta:Preguntas, preguntaId: string): Promise<void>{
    return new Promise(async (resolve, reject) => {
      try {
        const id = preguntaId || this.afs.createId();
        const data = {id, ...pregunta};
        const result = await this.preguntasCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    })
   }
   private getPreguntas():void{
     this.preguntas = this.afs.collection(('preguntas'), ref => ref.where('principal', '==', true)).valueChanges().pipe(
      map(actions => actions.map(a => a as Preguntas)));
     console.log("preguntas aqui", this.preguntas);
   }
}
