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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
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
    this.navCtrl.setRoot(MenuAdminPage)
  }

  google() {
    this.navCtrl.setRoot(MenuAdminPage)
  }
  signup() {
    this.navCtrl.push(SignupPage)
  }
}
