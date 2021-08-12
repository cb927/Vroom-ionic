import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { CodePage } from '../code/code';

@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html'
})
export class VerificationPage {


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
      
  code() {
    let modal = this.modalCtrl.create(CodePage);
modal.present();
}

}
