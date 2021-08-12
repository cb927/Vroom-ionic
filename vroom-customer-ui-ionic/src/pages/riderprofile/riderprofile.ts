import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConfirmridePage } from '../confirmride/confirmride';
import { ChattingPage } from '../chatting/chatting';
@Component({
  selector: 'page-riderprofile',
  templateUrl: 'riderprofile.html'
})
export class RiderprofilePage {
  rideprofile: string = "about";

  constructor(public navCtrl: NavController) {

  }
  
 confirmride(){
    this.navCtrl.push(ConfirmridePage);
 }
 
       chatting(){
    this.navCtrl.push(ChattingPage);
    }

}