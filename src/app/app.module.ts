import { ConfirmPage } from './../pages/confirm/confirm';
import { DataService } from './../providers/data/data.service';
import { AuthService } from './../providers/data/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuUserPageModule } from './../pages/menu-user/menu-user.module';
import { AdminPage } from './../pages/admin/admin';
import { GooglePage } from './../pages/google/google';
import { ArchivadorPage } from './../pages/archivador/archivador';
import { NuevoPage } from './../pages/nuevo/nuevo';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';

import { MyApp } from './app.component';

import { TipoUsuarioPage } from '../pages/tipo-usuario/tipo-usuario';
import { GeneradorProvider } from '../providers/data/generador.provider';
import { MenuAdminPageModule } from '../pages/menu-admin/menu-admin.module';
import { LoginGooglePageModule } from '../pages/login-google/login-google.module';
import { LoginCredentialPageModule } from '../pages/login-credential/login-credential.module';
import { SignupPageModule } from '../pages/signup/signup.module';

export const  firebaseConfig = {
  apiKey: "AIzaSyBx-UqtvRvdVOeKFY4kMkk2BBtkW3pPGeg",
  authDomain: "my-project-1534457932782.firebaseapp.com",
  databaseURL: "https://my-project-1534457932782.firebaseio.com",
  projectId: "my-project-1534457932782",
  storageBucket: "my-project-1534457932782.appspot.com",
  messagingSenderId: "304756228789"
};


@NgModule({
  declarations: [
    MyApp,
    NuevoPage, ArchivadorPage, TipoUsuarioPage, GooglePage, AdminPage, ConfirmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MenuUserPageModule,
    MenuAdminPageModule,
    LoginGooglePageModule,
    LoginCredentialPageModule,
    SignupPageModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NuevoPage, ArchivadorPage, TipoUsuarioPage, GooglePage, AdminPage, ConfirmPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GeneradorProvider,
    GooglePlus,
    AngularFireAuth,
    AuthService,
    DataService
    ]
})
export class AppModule { }
