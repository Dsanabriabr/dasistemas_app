import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Dashboard',
      url: '/menu/dashboard'
    },
    {
      title: 'Students',
      url: '/menu/students'
    },
    {
      title: 'Dateam',
      url: '/menu/dateam'
    },
    {
      title: 'Pucminas',
      url: '/menu/pucminas'
    }
  ];

  selectPath = '';

  constructor(private  authService: AuthenticationService, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectPath = event.url;
      }
    });
   }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }
}
