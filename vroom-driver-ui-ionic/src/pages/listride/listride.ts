import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { RiderprofilePage } from '../riderprofile/riderprofile';
@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {

  constructor(public navCtrl: NavController) {

  }


 riderprofile(){
this.navCtrl.push(RiderprofilePage);
}

}
