import { map } from 'rxjs';
import { Sabor } from 'src/app/Core/models/sabor';
import { UserServices } from 'src/app/servicios/servicios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaboresService } from 'src/app/Core/services/sabores.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [UserServices]
})
export class PerfilComponent implements OnInit {

  currentUser: any = {};
  public saboresList: any[] = [];
  public saboresFav: any[] = [];
  public saboresFavArr: any[]= [];



  constructor(private userServices: UserServices, private actRoute: ActivatedRoute, public saboreservice: SaboresService) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.userServices.getUserProfile(id!).subscribe(res => {
      console.log(res.msg)
      this.saboresFav = res.msg.sabor
      this.currentUser = res.msg;

    })
  
    this.saboreservice.getSabores().forEach(element => {
  this.saboresList.push(element)
  this.recoversaboresfav();
    });
    
  console.log(this.saboresList)
  


}


  ngOnInit(): void {
   

  }
recoversaboresfav() {

for (const iterator of this.saboresList[0].sabor) {
  console.log(iterator)
  
}}

}

