import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Image } from 'src/app/models/image.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { FileItem } from 'src/app/models/file-item';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  imagen : Observable<Image[]>;
  private imageCollection: AngularFirestoreCollection<Image>;

  private MEDIA_STORAGE_PATH = 'dominicode';

  constructor(private readonly afs: AngularFirestore, private readonly storage: AngularFireStorage) {
    this.imageCollection = afs.collection<Image>('images');
    
   }

   uploadImage(images: FileItem[]) {
    for (const item of images) {
      item.uploading = true;
      const filePath = this.generateFileName(item.name);
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, item.file);
      item.uploadPercent = task.percentageChanges();
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            item.downloadURL = fileRef.getDownloadURL();
            item.uploading = false;
          })
        )
        .subscribe();
    }
  }

  private generateFileName(name: string): string {
    return `${this.MEDIA_STORAGE_PATH}/${new Date().getTime()}_${name}`;
  }

  onSaveImage(image: Image, imagenid: string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const id = imagenid || this.afs.createId();
        const data = {id, ...image };
        console.log(data); 
        const result = await this.imageCollection.doc(id).set(data);
        console.log("si guarda",data, id)
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

   getimageByID(idVehicle:string){
    return this.afs.collection(('images'), ref => ref.where('idvehicle','==', idVehicle)).valueChanges().pipe(
      map(actions => actions.map(a => a as Image))
    );
   }
}
