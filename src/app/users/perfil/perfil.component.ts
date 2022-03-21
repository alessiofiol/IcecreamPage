import { UserServices } from 'src/app/servicios/servicios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [UserServices]
})
export class PerfilComponent implements OnInit {

  currentUser: any = {};
  

  constructor(private userServices: UserServices, private actRoute: ActivatedRoute, public router:Router) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.userServices.getUserProfile(id!).subscribe(res => {
      this.currentUser = res.msg;
      console.log(this.currentUser);
    })
   }

  ngOnInit(): void {
    // console.log(this.currentUser)
  }

  /*saboresUsuario (){
    console.log(this.currentUser?.sabor);
    this.currentUser?.sabor.forEach((element: any) => {
      console.log(element);
    });
  }
  */

  infoHelados() {
    this.router.navigateByUrl('/sabores');
  }
}
