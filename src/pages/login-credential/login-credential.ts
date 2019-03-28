import { DataService } from './../../providers/data/data.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuAdminPage } from '../menu-admin/menu-admin';
import { SignupPage } from '../signup/signup';


@IonicPage()
@Component({
  selector: 'page-login-credential',
  templateUrl: 'login-credential.html',
})
export class LoginCredentialPage implements OnInit{
  loginForm: FormGroup;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private formBuilder: FormBuilder,
              private dataService: DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginCredentialPage');
  }

  ngOnInit() {
    this.initFormBuilder();
  }

 initFormBuilder() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    this.dataService.auth().signIn(this.loginForm.value)
      .then((res: any) => {
        const d = res.user.providerData[0];
        d.key = res.user.uid;
        d.issueDate = new Date().toISOString();
        this.saveSession(d);
        this.navCtrl.setRoot(MenuAdminPage);
      }//, error => {
       // this.showError("Access Denied");
      ).catch(err => {
        console.log("no se cargo el mensaje");
        //this.global.showError("Access Denied");
      });
  }

  saveSession(data) {
    this.dataService.auth().addSession(data)
      .then(res => { }, err => console.error(err))
      .catch(err => console.error(err));
  }

  google() {
    this.navCtrl.setRoot(MenuAdminPage)
  }
  signup() {
    this.navCtrl.push(SignupPage)
  }


}
