import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.css']
})
export class MisdatosComponent implements OnInit {
  usuario: string = localStorage.getItem('nombre');
  email: string = localStorage.getItem('userEmail');
  user:any;

  constructor(private userSv: UserService) { 
    this.userSv.getUserbyEmail(this.email).subscribe(resp=>{
      this.user = resp;
    })
  }

  ngOnInit(): void {
  }

}
