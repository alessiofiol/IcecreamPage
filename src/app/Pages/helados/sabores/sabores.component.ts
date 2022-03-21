import { Component, OnInit } from '@angular/core';
import { Ihelados } from 'src/app/Models/ihelados';
import { HttpRequestService } from 'src/app/shared/sevicios/http-request.service';

@Component({
  selector: 'app-sabores',
  templateUrl: './sabores.component.html',
  styleUrls: ['./sabores.component.css']
})
export class SaboresComponent implements OnInit {
  private baseUrl: string ='https://apiserverfinal.herokuapp.com/';

  public saboresUrl = this.baseUrl + 'sabores';

  public saboresList:Ihelados []=[];
  public search:string ="";
  public page:number= 0;


  constructor(public httpRequestService: HttpRequestService) { }

  ngOnInit(): void {

    this.RecoverSaboresData();

  }

  public RecoverSaboresData(){
    this.httpRequestService.getData(this.saboresUrl).subscribe((data:any)=>{
      this.saboresList=data;

    })
  }

nextPage(){
  this.page += 5;
}
prevPage(){
  if(this.page>0)
  this.page -= 5;
}

  onSearchSabor(search:string){
    this.search = search;

  }

}
