import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';
import { ChattingPage } from '../chatting/chatting';
@Component({
  selector: 'page-riderprofile',
  templateUrl: 'riderprofile.html'
})
export class RiderprofilePage {
rideprofile: string = "about";

  constructor(public navCtrl: NavController) {

  }
  
 confirmpopup(){
    this.navCtrl.push(ConfirmpopupPage);
 }
 
       chatting(){
    this.navCtrl.push(ChattingPage);
    }

}