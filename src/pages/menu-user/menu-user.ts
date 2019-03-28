import { DataService } from './../../providers/data/data.service';
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
  m: any = { lastName: '', firstName: '', displayName: '', email: ''};

  username: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private dataService: DataService) { }

  ionViewDidLoad() { this.dataService.auth().getSession()
    .then(res => {
      this.getInformation(res.email);
    }, error => {
      console.log(error);
    })
    .catch(error => {
      console.log(error);
    });
  }

  getInformation(email: any) {
    this.dataService.auth().getProfile(email)
      .then((res: any) => {
        console.log(res)
        this.m= res;
      }, error => {
        console.log(error);
      })
      .catch(error => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.rootPage = NuevoPage;
    this.m;
    this.pages = [
      { titulo: 'Formulario', component: NuevoPage, icon: 'person' }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  logout() {
    this.dataService.auth().logout()
    .then(res => {
      this.navCtrl.setRoot(TipoUsuarioPage);
    }, err => { console.log(err); })
    .catch(error => { console.log(error); });
  }
}
