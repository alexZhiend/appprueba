import { DataService } from './../../providers/data/data.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MenuUserPage } from '../menu-user/menu-user';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-login-google',
  templateUrl: 'login-google.html',
})
export class LoginGooglePage {

  // user: Observable<firebase.User>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth:AngularFireAuth,
    private platform:Platform, 
    private dataService: DataService ) {
      // this.user = this.afAuth.authState; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginGooglePage');
  }

  saveSession(data) {
    this.dataService.auth().addSession(data)
      .then(res => { }, err => console.error(err))
      .catch(err => console.error(err));
  }

  google() {
    if (this.platform.is('android') || this.platform.is("cordova")) {
      this.dataService.auth().nativeGoogleLogin()
        .then(res => {
          const d = res.user.providerData[0];
          this.dataService.auth().createUser(d);
          d.key = res.user.uid;
          d.issueDate = new Date().toISOString();
          this.saveSession(d);
          this.navCtrl.setRoot(MenuUserPage);
        }
        // ,
        // error => this.global.showMensaje("Access Denied")
        )
        .catch(error => {console.log('no se cargo el log')
          // this.global.showMensaje("Access Denied");
        });
    } else
      if (this.platform.is('mobileweb')) {
        this.dataService.auth().webGoogleLogin()
          .then(res => {
            const d = res.user.providerData[0];
            this.dataService.auth().createUser(d);
            d.key = res.user.uid;
            d.issueDate = new Date().toISOString();
            this.saveSession(d);
            this.navCtrl.setRoot(MenuUserPage);
          }
          // ,
          //   error => this.global.showMensaje("Access Denied")
          )
          .catch(error => { console.log('error ')
            // this.global.showMensaje("Access Denied");
          });
      } 
      else {
        console.log("error de pagina")
        // this.global.showMensaje("otra Tecnologia")
      }

  }


  googleweb(){
    this.dataService.auth().webGoogleLogin()
          .then(res => {
            const d = res.user.providerData[0];
            this.dataService.auth().createUser(d);
            d.key = res.user.uid;
            d.issueDate = new Date().toISOString();
            this.saveSession(d);
            this.navCtrl.setRoot(MenuUserPage);
          })
          .catch(err=>{console.log("error en log")})
  }

}
