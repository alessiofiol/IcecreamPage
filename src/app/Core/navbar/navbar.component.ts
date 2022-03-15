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
    { label: 'Helados', url: '/helados' },
    { label: 'crearhelados', url: '/crearhelados' },
    { label: 'Perfil', url: '/perfil/_id' },
   
    
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

  navLogin() {
    this.router.navigateByUrl('/login');
  };

  navRegister() {
    this.router.navigateByUrl('/registro');
  };

  navPerfil() {
    this.router.navigateByUrl('/perfil');
  };
}
