import { UserServices } from 'src/app/servicios/servicios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css'],
  providers: [UserServices]
})
export class HeladosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
