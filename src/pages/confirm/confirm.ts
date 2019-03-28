import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
reserva: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.reserva = navParams.data;
  }

  ionViewDidLoad() {
    console.log(this.reserva + "hola");
  }

}
