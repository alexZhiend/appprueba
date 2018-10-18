import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { NuevoPage } from '../nuevo/nuevo';
import { TipoUsuarioPage } from '../tipo-usuario/tipo-usuario';


@IonicPage()
@Component({
  selector: 'page-menu-user',
  templateUrl: 'menu-user.html',
})
export class MenuUserPage implements OnInit {

  @ViewChild(Nav) nav: Nav;

  public pages: Array<{ titulo: string, component: any, icon: any }>;
  public rootPage: any;

  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {

  }

  ngOnInit() {
    this.rootPage = NuevoPage;
    this.username = "SOLICITANTE";
    this.pages = [
      { titulo: 'Formulario', component: NuevoPage, icon: 'person' }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  logout() {
    this.navCtrl.setRoot(TipoUsuarioPage);
  }
}
