import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChattingPage } from '../chatting/chatting';

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {

  constructor(public navCtrl: NavController) {

  }
  
     chatting(){
    this.navCtrl.push(ChattingPage);
    }

}
