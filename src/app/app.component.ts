import { LoginGooglePage } from './../pages/login-google/login-google';
import { ArchivadorPage } from './../pages/archivador/archivador';
import { HomePage } from './../pages/home/home';
import { NuevoPage } from './../pages/nuevo/nuevo';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { TipoUsuarioPage } from '../pages/tipo-usuario/tipo-usuario';

var config = {
  apiKey: "AIzaSyBx-UqtvRvdVOeKFY4kMkk2BBtkW3pPGeg",
  authDomain: "my-project-1534457932782.firebaseapp.com",
  databaseURL: "https://my-project-1534457932782.firebaseio.com",
  projectId: "my-project-1534457932782",
  storageBucket: "my-project-1534457932782.appspot.com",
  messagingSenderId: "304756228789"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: NavController;
  public pages:Array<{titulo:string,component:any,icon:any}>;
  public rootPage: any;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.rootPage=TipoUsuarioPage;  
    this.pages=[
      {titulo:'Bienvenido', component: TipoUsuarioPage, icon :'home'},
      {titulo:'Formulario', component:NuevoPage, icon:'person'},
      {titulo:'Archivador', component:ArchivadorPage, icon:'bookmarks'},
      {titulo:'Iniciar sesion', component: LoginGooglePage, icon:'contact'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }

goToPage(page){
  this.nav.setRoot(page);
}

}

