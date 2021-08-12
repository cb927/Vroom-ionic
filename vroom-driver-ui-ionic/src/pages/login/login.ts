import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
//import { TabsPage } from '../tabs/tabs';
import { FindridePage } from '../findride/findride';

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
    
    findride(){
        this.navCtrl.push(FindridePage);
    }

}
