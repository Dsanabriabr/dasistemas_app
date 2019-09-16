import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    {
      title: "Dashboard",
      url: "members/menu/dashboard",
      icon: "home"
    },
    {
      title: "Students",
      url: "members/menu/students",
      icon: "home"
    },
    {
      title: "Dateam",
      url: "members/menu/dateam",
      icon: "home"
    },
    {
      title: "Pucminas",
      url: "members/menu/pucminas",
      icon: "home"
    }
  ];

  selectedPath = "";

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
