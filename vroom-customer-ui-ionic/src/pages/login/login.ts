import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }
  
    signup(){
        this.navCtrl.push(SignupPage);
    }
    
    tabs(){
        this.navCtrl.push(TabsPage);
    }

}
