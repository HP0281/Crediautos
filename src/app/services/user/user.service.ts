import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Observable<User[]>;

  private usercollection: AngularFirestoreCollection<User>;

  constructor(private readonly afs: AngularFirestore) {
    this.usercollection = afs.collection<User>('users');
    
   }

  onDeleteUser(vehicleid: string): Promise<void>{
  return new Promise(async (resolve, reject)=>{
    try {
      const result = await this.usercollection.doc(vehicleid).delete();
      resolve(result);
    } catch (error) {
      reject(error.message);
    }
  });
  }
  onSaveUser(user: User, vechicleId?: string): Promise<void>{
    console.log("guardar usuario 1", user)
    return new Promise(async (resolve, reject ) => {
      try {
        const id = vechicleId || this.afs.createId();
        const data = {id, ...user };
        console.log("guardar usuario 2", user)
        const result = await this.usercollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        console.log("guardar usuario 3", user)
        reject(error.message);
      }
      console.log("guardar usuario 4", user)
    });
  }
  private getUsers(): void{
    this.user = this.usercollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as User))
    );
  }
  getEmailById(id:string){
    return this.afs.collection(('users'), ref => ref.where('id', "==", id)).valueChanges().pipe(
      map(actions => actions.map(a => a as User))
   );
  }
  getUserbyEmail(email:string){
    return this.afs.collection(('users'), ref => ref.where('email', '==', email)).valueChanges().pipe(
      map(actions => actions.map(a => a as User))
   );
  }
}