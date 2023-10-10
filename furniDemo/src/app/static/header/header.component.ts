import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showButton: boolean = true

  constructor(private router:Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        this.showButton = this.router.url !== '/logIn'
      }
    })
  }

  buttonVisible(){
    this.showButton = false
    this.router.navigate(['/logIn'])
  }
}

