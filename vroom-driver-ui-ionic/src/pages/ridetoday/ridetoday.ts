import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChattingPage } from '../chatting/chatting';

@Component({
  selector: 'page-ridetoday',
  templateUrl: 'ridetoday.html'
})
export class RidetodayPage {

  constructor(public navCtrl: NavController) {

  }
  
     chatting(){
    this.navCtrl.push(ChattingPage);
    }

}
