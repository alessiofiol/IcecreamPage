import { UserServices } from 'src/app/servicios/servicios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  currentUser: any = {};
  

  constructor(public userServices: UserServices, private actRoute: ActivatedRoute) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.userServices.getUserProfile(id!).subscribe(res => {
      this.currentUser = res.msg;
      console.log(this.currentUser);
    })
   }

  ngOnInit(): void {
  }

}
