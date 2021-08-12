import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FilterPage } from '../filter/filter';
import { RiderprofilePage } from '../riderprofile/riderprofile';

@Component({
  selector: 'page-listride',
  templateUrl: 'listride.html'
})
export class ListridePage {

  constructor(public navCtrl: NavController) {

  }

 filter(){
    this.navCtrl.push(FilterPage);
 }
 
 riderprofile(){
this.navCtrl.push(RiderprofilePage);
}

}
