import { Component, OnInit } from '@angular/core';
import { Ihelados } from 'src/app/Models/ihelados';
import { HttpRequestService } from 'src/app/shared/sevicios/http-request.service';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  private baseUrl: string ='https://apiserverfinal.herokuapp.com/';

  public especialidadesUrl = this.baseUrl + 'especialidades';
  public especialidadesList:Ihelados [] =[];
  public search:string="";
  public page:number= 0;


  constructor(public httpRequestService: HttpRequestService) { }

  ngOnInit(): void {

    this.RecoverEspecialidadesData();
  }


  public RecoverEspecialidadesData(){
    this.httpRequestService.getData(this.especialidadesUrl).subscribe((data:any)=>{
      this.especialidadesList=data;
  })

  }
  nextPage(){
    this.page += 4;
  }
  prevPage(){
    if(this.page>0)
    this.page -= 4;
  }

  onSearchEspecialidades(search:string){
    this.page = 0;
    this.search = search;

  }

}
