import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginCredentialPage } from './login-credential';

@NgModule({
  declarations: [
    LoginCredentialPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginCredentialPage),
  ],
})
export class LoginCredentialPageModule {}
