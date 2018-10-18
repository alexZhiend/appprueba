import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-archivador',
  templateUrl: 'archivador.html',
})
export class ArchivadorPage {
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchivadorPage');
  }

}
