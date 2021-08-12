import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { VerificationPage } from '../verification/verification';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }
  
    login(){
        this.navCtrl.push(LoginPage);
    }
     
    verification(){
        this.navCtrl.push(VerificationPage);
    }

}
