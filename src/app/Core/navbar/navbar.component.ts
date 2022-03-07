import { Menuitem } from './models/menuitems';
import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../servicios/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public menuItem: Menuitem[] = [
    { label: 'home', url: '/' },
    { label: 'helados', url: '/helados' },
    { label: 'login', url: '/login' },
    { label: 'registro', url: '/registro' },
    
  ]
  

  constructor(public router:Router, public userServices: UserServices) { }

  ngOnInit(): void {
  }

  public doLogout(){
    let removeToken = localStorage.removeItem('access_token')
    if (removeToken == null) {
    this.router.navigate([''])
    }
  }
}
