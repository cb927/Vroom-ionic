import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-code',
  templateUrl: 'code.html'
})
export class CodePage {
rootPage:any = TabsPage;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
   
   rootpage(){
    this.navCtrl.push(TabsPage);
    }
    
         dismiss() {
    this.viewCtrl.dismiss();
  }

}
