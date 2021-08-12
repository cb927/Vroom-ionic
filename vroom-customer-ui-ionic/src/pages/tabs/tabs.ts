import { Component } from '@angular/core';

import { MyridePage } from '../myride/myride';
import { ChatsPage } from '../chats/chats';
import { FindridePage } from '../findride/findride';
import { WalletPage } from '../wallet/wallet';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MyridePage;
  tab2Root = ChatsPage;
  tab3Root = FindridePage;
  tab4Root = WalletPage;
  tab5Root = MorePage;

  constructor() {

  }
}
