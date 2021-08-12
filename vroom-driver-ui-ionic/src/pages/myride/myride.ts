import { Component, Inject } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { RateriderPage } from '../raterider/raterider';
import { ChattingPage } from '../chatting/chatting';
import { RidetodayPage } from '../ridetoday/ridetoday';
import { AppConfig, APP_CONFIG } from '../../app/app.config';
import { BuyAppAlertPage } from '../buyappalert/buyappalert';

@Component({
  selector: 'page-myride',
  templateUrl: 'myride.html'
})
export class MyridePage {

  ride: string = "today";

  constructor(@Inject(APP_CONFIG) private config: AppConfig, public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  raterider() {
    this.navCtrl.push(RateriderPage);
  }

  chatting() {
    this.navCtrl.push(ChattingPage);
  }
  ridetoday() {
    this.navCtrl.push(RidetodayPage);
  }
  buyThisApp() {
    let profileModal = this.modalCtrl.create(BuyAppAlertPage, { userId: 8675309 });
    profileModal.present();
  }
}
