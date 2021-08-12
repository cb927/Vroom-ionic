import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { SignupPage } from '../signup/signup';
//import { PasswordPage } from '../password/password';

@Component({
  selector: 'page-password',
  templateUrl: 'password.html'
})
export class PasswordPage {

  constructor(public navCtrl: NavController) {

  }
  
   // signup(){
   //     this.navCtrl.push(SignupPage);
   // }
    
   // password(){
   //     this.navCtrl.push(PasswordPage);
   // }

}
