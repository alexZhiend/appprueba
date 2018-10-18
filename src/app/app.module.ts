import { AdminPage } from './../pages/admin/admin';
import { GooglePage } from './../pages/google/google';
import { ArchivadorPage } from './../pages/archivador/archivador';
import { NuevoPage } from './../pages/nuevo/nuevo';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataProvider } from '../providers/data/data';
import { LoginGooglePage } from '../pages/login-google/login-google';
import { TipoUsuarioPage } from '../pages/tipo-usuario/tipo-usuario';

@NgModule({
  declarations: [
    MyApp,
    HomePage, NuevoPage, ArchivadorPage, LoginGooglePage, TipoUsuarioPage, GooglePage, AdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, NuevoPage, ArchivadorPage, LoginGooglePage, TipoUsuarioPage, GooglePage, AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
