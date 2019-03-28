import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { ArchivadorPage } from '../archivador/archivador';
import { TipoUsuarioPage } from '../tipo-usuario/tipo-usuario';


@IonicPage()
@Component({
  selector: 'page-menu-admin',
  templateUrl: 'menu-admin.html',
})
export class MenuAdminPage implements OnInit {
  @ViewChild(Nav) nav: Nav;

  public pages: Array<{ titulo: string, component: any, icon: any }>;
  public rootPage: any;

  username: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log("MENU-ADMIN")
  }

  ngOnInit() {
    this.rootPage = ArchivadorPage;
    this.username = "ADMINISTRADOR";
    this.pages = [
      { titulo: 'Archivador', component: ArchivadorPage, icon: 'bookmarks' }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  logout() {
    this.navCtrl.setRoot(TipoUsuarioPage);
  }
}
