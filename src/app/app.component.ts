import { MenuUserPage } from './../pages/menu-user/menu-user';
import { LoginGooglePage } from './../pages/login-google/login-google';
import { DataService } from './../providers/data/data.service';
import { Component, } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { TipoUsuarioPage } from '../pages/tipo-usuario/tipo-usuario';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage: any = TipoUsuarioPage;


  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private dataService: DataService) {
                this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.loadPage();
    });
  }

  loadPage() {
    this.dataService.auth().getSession()
      .then(user => {
        if (user) {
          const d = user.providerData[0];
          d.key = user.uid;
          d.issueDate = new Date().toISOString();
          this.saveSession(d);
          this.rootPage = MenuUserPage;
        } else {
          this.rootPage = TipoUsuarioPage;
        }
      }, err => {
        console.log(err);
        this.rootPage = TipoUsuarioPage;
      })
      .catch(err => {
        console.log(err);
        this.rootPage = TipoUsuarioPage;
      });
  }

  saveSession(data) {
    this.dataService.auth().addSession(data)
      .then(res => { }, err => console.error(err))
      .catch(err => console.error(err));
  }

}

