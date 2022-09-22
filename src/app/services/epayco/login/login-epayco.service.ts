import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Injectable } from '@angular/core';
import { credenciales } from '../credential';
import { TokenJwt } from 'src/app/models/token.interface'

@Injectable({
  providedIn: 'root'
})
export class LoginEpaycoService {
  
  url_apify = credenciales.URL_APIFY;
  constructor(private http: HttpClient) {  }

  public  async getTokenEpayco(): Promise<string>  {
    const cabecera = { headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': "Basic " + btoa(credenciales.PUBLIC_KEY+":"+credenciales.PRIVATE_KEY)
    }) };
    let jwt;
    await this.http.post(this.url_apify + '/login', '', cabecera).subscribe(res => {
      var jsonData = JSON.stringify(res);
      console.log(jsonData);
      jwt = JSON.parse(jsonData);
      let tok = jwt.token as string;
      localStorage.setItem('jwt', tok );
      console.log(jwt.token as string)
      return jwt.token as string;
    }, error => {
      console.log('error', error);
      return error.toString();
    });
    console.log("token final ", jwt.token);
    return jwt.token;
  }
}
