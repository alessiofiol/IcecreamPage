import { Menuitem } from './models/menuitems';
import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../servicios/servicios.service';
import { Router } from '@angular/router';


 


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserServices]
})
export class NavbarComponent implements OnInit {

  public menuItem: Menuitem[] = [
    { label: 'Home', url: '/' },
    { label: 'Helados', url: '/helados' },
    
  ]
  

  constructor(public router:Router, public userServices: UserServices) { }

  ngOnInit(): void { 
    
   }

 

  public doLogout(){
    let removeToken = localStorage.removeItem('access_token')
    if (removeToken == null) {
    this.router.navigate([''])
      .then(() => {
        window.location.reload();
      })
    }
  }

  navLogin() {
    this.router.navigateByUrl('/login');
  };

  navRegister() {
    this.router.navigateByUrl('/registro');
  };

  navPerfil() {
    this.router.navigateByUrl('/perfil/' + this.userServices.getIdByToken());
  };

  navCrearHelado() {
    this.router.navigateByUrl('/crearhelados/' + this.userServices.getIdByToken());
    
  };
}
