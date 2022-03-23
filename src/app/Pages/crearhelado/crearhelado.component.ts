import { UserServices } from 'src/app/servicios/servicios.service';
import { Sabor, userSabor } from 'src/app/Core/models/sabor';
import { SaboresService } from './../../Core/services/sabores.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  currentUser: any = {};


  constructor(public saboreservice: SaboresService, private formbuilder:FormBuilder, public router: Router, private actRoute: ActivatedRoute, private userServices: UserServices) {
    this.saborform = this.formbuilder.group({
      saboradd: String,
      
    
    })


    
    this.saboreservice.getSabores().forEach(element => {
     
      this.saboresList.push(element)
      // console.log(this.saboresList)
     
  
    }); }

  ngOnInit(): void {
    console.log("Hola");
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.userServices.getUserProfile(id!).subscribe(res => {
      this.currentUser = res.msg;
      console.log(this.currentUser);
    })

    //Hacer un bucle que haga push de todos los sabores que tiene el currentUser, el push tiene que ir saborselection
  }
  public onSubmit (): void {
    this.submitted = true;
    if (this.saborform.valid){
    
    const saborregister: userSabor =
    {
      sabor: this.saborselection,
    };
    let id = this.actRoute.snapshot.paramMap.get('id')
    this.saboreservice.saborregister(saborregister, id).subscribe((res:any)=>{
     
       
        this.router.navigate(['/perfil/' + this.userServices.getIdByToken()])
      console.log(res)
    })
    this.saborform.reset();
    this.submitted = false;
    }
    }


  public saborselection:any = []; 

  onchangesabor ($event:any) {
    const saboradd = $event.target.value;
    const ischecked = $event.target.checked;

    let currentSaboresList: [any] = this.saboresList[0];

    let currentSabor = currentSaboresList.find((sabor) => {
      return sabor.sabor == saboradd;
    })

  if (ischecked==true) {
    this.saborselection.push(currentSabor)
  } else {
    let index = (this.saborselection as any[]).findIndex((value) => {

      // console.log(value.sabor);
      // console.log(currentSabor.sabor);

      return value.sabor == currentSabor.sabor;
  });

    // console.log(index);
    
    if (index > -1) {
    this.saborselection.splice(index, 1);
  }
  }
   console.log(this.saborselection)
  }







}