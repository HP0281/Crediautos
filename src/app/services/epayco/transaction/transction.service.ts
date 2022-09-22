import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../../user/user.service';
import { credenciales } from '../credential';
import { User } from 'src/app/models/user.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TransctionService {

  url_apify = credenciales.URL_APIFY;
  public user: User;
  private TransactionCollection: AngularFirestoreCollection<any>;

  constructor(private http: HttpClient, private userService: UserService, private readonly afs: AngularFirestore) {
    this.TransactionCollection = afs.collection<any>('ventas');
   }

   
  onSaveTransaction(dataTransaction: any, idT: string): Promise<void>{
    return new Promise(async (resolve, reject ) => {
      try {
        const id = idT || this.afs.createId();
        const data = {id, ...dataTransaction };
        const result = await this.TransactionCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  }

  public pagoTarjeta(token: string, obj: any, use: User){
    this.user = use;
    const cabecera = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token as string
      })
    };
    const body =
    {
      "value": obj.value.toString(),
      "docType": this.user.typeDoc,
      "docNumber": this.user.identificacion,
      "name": this.user.name ,
      "lastName": this.user.lastname,
      "email": obj.customer_email,
      "cellPhone": this.user.telefono,
      "phone": this.user.telefono,
      "cardNumber": obj.number.toString(),
      "cardExpYear": obj.exp_year.toString(),
      "cardExpMonth": obj.exp_month.toString(),
      "cardCvc": obj.cvc.toString(),
      "dues": obj.installments.toString(),
    };
    return this.http.post(this.url_apify + '/payment/process', body, cabecera);
  }

  public pagoPSE(token: string, obj: any) {
    let cred = JSON.parse(localStorage.getItem('cred'));

    console.log("data", obj)
    this.userService.getEmailById(cred.user.uid).subscribe(u => {
      this.user = u[0];
      console.log(this.user);
      
      const cabecera = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + token as string
        })
      };
      const body =
      {
        "bank":"1077", 
        "ip":"190.000.000.000",
        "urlResponse":"https://www.prueba.com",
        "urlConfirmation":"https://www.test.com",
        "value": obj.value.toString(),
        "docType": this.user.typeDoc,
        "docNumber": this.user.identificacion,
        "name": this.user.name ,
        "lastName": this.user.lastname,
        "email": obj.customer_email,
        "cellPhone": this.user.telefono,
      }
        ;
      console.log("data", body)
      this.http.post(this.url_apify + '/payment/process/pse', body, cabecera).subscribe((res: any) => {
        console.log(res)
      }, (error: any) => {
        console.log('error', error)
      })
    });

  }
  public obtenerBanks(token: string){
    const cabecera = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token as string
      })
    };
    this.http.get(this.url_apify + '/payment/pse/banks', cabecera).subscribe(resp => {
      console.log("bancos",resp);
    });
  }
}