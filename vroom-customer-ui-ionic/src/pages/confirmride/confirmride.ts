import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';


import { ConfirmpopupPage } from '../confirmpopup/confirmpopup';

@Component({
  selector: 'page-confirmride',
  templateUrl: 'confirmride.html'
})
export class ConfirmridePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
 confirmpopup(){
    let modal = this.modalCtrl.create(ConfirmpopupPage);
    modal.present();
 }

}