import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuUserPage } from '../menu-user/menu-user';

@IonicPage()
@Component({
  selector: 'page-login-google',
  templateUrl: 'login-google.html',
})
export class LoginGooglePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginGooglePage');
  }

  google() {
    this.navCtrl.setRoot(MenuUserPage);
  }
}
