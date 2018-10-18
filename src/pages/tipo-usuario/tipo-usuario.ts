import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginGooglePage } from '../login-google/login-google';
import { LoginCredentialPage } from '../login-credential/login-credential';
@IonicPage()
@Component({
  selector: 'page-tipo-usuario',
  templateUrl: 'tipo-usuario.html',
})
export class TipoUsuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipoUsuarioPage');
  }

  solicitante() {
    this.navCtrl.push(LoginGooglePage)
  }

  administrativo() {
    this.navCtrl.push(LoginCredentialPage);
  }

}
