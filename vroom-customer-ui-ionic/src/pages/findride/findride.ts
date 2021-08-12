import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListridePage } from '../listride/listride';


@Component({
  selector: 'page-findride',
  templateUrl: 'findride.html'
})
export class FindridePage {

  constructor(public navCtrl: NavController) {

  }
  
 listride(){
    this.navCtrl.push(ListridePage);
 }
 

}
