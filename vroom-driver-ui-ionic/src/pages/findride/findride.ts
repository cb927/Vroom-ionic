import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-findride',
  templateUrl: 'findride.html'
})
export class FindridePage {
ride: string = "oneway";

  constructor(public navCtrl: NavController) {

  }
  
 tabs(){
    this.navCtrl.push(TabsPage);
 }
 

}
