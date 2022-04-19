import { UserServices } from 'src/app/servicios/servicios.service';
import { Component, OnInit } from '@angular/core';
import { SaboresService } from 'src/app/Core/services/sabores.service';

@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css'],
  providers: [UserServices]
})
export class HeladosComponent implements OnInit {
  public saboresList: any[] = [];
  public seleccionado: string[] =[];

  constructor(public saboreservice: SaboresService) {
    this.saboreservice.getSabores().forEach(element => {
     
      this.saboresList.push(element)
      // console.log(this.saboresList)
     
  
    }); 
   }

  ngOnInit(): void {
  }
  public saborselection:any = []; 
  onchangesabor ($event:any) {
    const saboradd= this.seleccionado
    let currentSaboresList: [any] = this.saboresList[0];
    
    let currentSabor = currentSaboresList.find((sabor) => {
      return sabor.image == saboradd;
    })
    this.saborselection.splice(0,1,currentSabor)
  }
}
