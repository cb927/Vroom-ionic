import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';


import { ProfilePage } from '../profile/profile';
import { ReviewsPage } from '../reviews/reviews';
import { NotificationPage } from '../notification/notification';
import { TermsPage } from '../terms/terms';
import { EarnPage } from '../earn/earn';
import { RatevroomPage } from '../ratevroom/ratevroom';
import { HelpPage } from '../help/help';
import { LoginPage } from '../login/login';
import { UploadPage } from '../upload/upload';
import { ManagelanguagePage } from '../managelanguage/managelanguage';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser';
import { AppConfig, APP_CONFIG } from '../../app/app.config';

@Component({
     selector: 'page-more',
     templateUrl: 'more.html'
})
export class MorePage {

     constructor(@Inject(APP_CONFIG) private config: AppConfig, public navCtrl: NavController, private inAppBrowser: InAppBrowser) {

     }

     profile() {
          this.navCtrl.push(ProfilePage);
     }
     reviews() {
          this.navCtrl.push(ReviewsPage);
     }
     notification() {
          this.navCtrl.push(NotificationPage);
     }
     terms() {
          this.navCtrl.push(TermsPage);
     }
     earn() {
          this.navCtrl.push(EarnPage);
     }
     ratevroom() {
          this.navCtrl.push(RatevroomPage);
     }
     help() {
          this.navCtrl.push(HelpPage);
     }
     login() {
          this.navCtrl.push(LoginPage);
     }
     upload() {
          this.navCtrl.push(UploadPage);
     }
     chooseLanguage() {
          this.navCtrl.push(ManagelanguagePage);
     }
     developedBy() {
          const options: InAppBrowserOptions = {
               zoom: 'no'
          }
          this.inAppBrowser.create('https://verbosetechlabs.com/', '_system', options);
     }
}
