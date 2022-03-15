import { Sabor, userSabor } from 'src/app/Core/models/sabor';
import { SaboresService } from './../../Core/services/sabores.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearhelado',
  templateUrl: './crearhelado.component.html',
  styleUrls: ['./crearhelado.component.css']
})
export class CrearheladoComponent implements OnInit {
  public saboresList: any[] = [];
  public  saborform: FormGroup;
  public submitted: boolean = false;
  public Saboreslistselect: any[]=[];
public seleccionado: string[] =[];

  constructor(public saboreservice: SaboresService, private formbuilder:FormBuilder, public router: Router) {
    this.saborform = this.formbuilder.group({
      saboradd: String,
      
    
    })
    this.saboreservice.getSabores().forEach(element => {
     
      this.saboresList.push(element)
      console.log(this.saboresList)
     
  
    }); }

  ngOnInit(): void {
  }

  public onSubmit (): void {
    this.submitted = true;
    if (this.saborform.valid){
    
    const saborregister: userSabor =
    {
      sabor: this.saborselection,
    };
    this.saboreservice.saborregister(saborregister).subscribe((res:any)=>{
     
       
        this.router.navigate([''])
      
    })
    this.saborform.reset();
    this.submitted = false;
    }
    }


public imagencono : string ='' 
  public saborselection:any = []; 

  onchangesabor ($event:any) {
    const saboradd = $event.target.value;
    const ischecked = $event.target.checked;

  if (ischecked==true) {
  this.saborselection.push(saboradd)
 
  
  } else {
    this.saborselection.pop(saboradd)
  }
   console.log(this.saborselection)
  }

}
