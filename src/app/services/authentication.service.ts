import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authenticationState = new BehaviorSubject(null);

  constructor(private storage: Storage, private plt: Platform) { 
    this.plt.ready().then(() => {
     // check if token saved to open without login page
      // this.checkToken();
    });
  }

  login() {
    return this.storage.set(TOKEN_KEY, 'Baerer 123456').then(res => {
      this.authenticationState.next(true);
      console.log("tokenSalvo");
    });
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
      console.log("tokenDeletado");
    });
  }

  isAuthenticated(){
    return this.authenticationState.value;
  }

  checkToken(){
    return this.storage.get(TOKEN_KEY).then(res => {
      console.log("token:", res);
      if (res) {
        this.authenticationState.next(true);
      } else {
        this.authenticationState.next(false);
      }
      console.log("tokenCheck");
    });
  }
}
