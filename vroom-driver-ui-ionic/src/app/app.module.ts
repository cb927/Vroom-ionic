import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { MyridePage } from '../pages/myride/myride';
import { ChatsPage } from '../pages/chats/chats';
import { FindridePage } from '../pages/findride/findride';
import { WalletPage } from '../pages/wallet/wallet';
import { MorePage } from '../pages/more/more';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PasswordPage } from '../pages/password/password';
import { VerificationPage } from '../pages/verification/verification';
import { CodePage } from '../pages/code/code';
import { ListridePage } from '../pages/listride/listride';
import { FilterPage } from '../pages/filter/filter';
import { RiderprofilePage } from '../pages/riderprofile/riderprofile';
import { ConfirmridePage } from '../pages/confirmride/confirmride';
import { ConfirmpopupPage } from '../pages/confirmpopup/confirmpopup';
import { RateriderPage } from '../pages/raterider/raterider';
import { ChattingPage } from '../pages/chatting/chatting';
import { ProfilePage } from '../pages/profile/profile';
import { ReviewsPage } from '../pages/reviews/reviews';
import { NotificationPage } from '../pages/notification/notification';
import { TermsPage } from '../pages/terms/terms';
import { EarnPage } from '../pages/earn/earn';
import { RatevroomPage } from '../pages/ratevroom/ratevroom';
import { HelpPage } from '../pages/help/help';
import { RidetodayPage } from '../pages/ridetoday/ridetoday';
import { UploadPage } from '../pages/upload/upload';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { APP_CONFIG, BaseAppConfig } from "./app.config";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Globalization } from '@ionic-native/globalization';
import { ManagelanguagePage } from '../pages/managelanguage/managelanguage';
import { BuyAppAlertPage } from '../pages/buyappalert/buyappalert';
import { Vt_popupPage } from '../pages/vt_popup/vt_popup';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MyridePage,
    ChatsPage,
    FindridePage,
    WalletPage,
    MorePage,
    LoginPage,
    PasswordPage,
    SignupPage,
    VerificationPage,
    CodePage,
    ListridePage,
    FilterPage,
    RiderprofilePage,
    ConfirmridePage,
    ConfirmpopupPage,
    RateriderPage,
    ChattingPage,
    ProfilePage,
    ReviewsPage,
    NotificationPage,
    TermsPage,
    EarnPage,
    RatevroomPage,
    RatevroomPage,
    HelpPage,
    RidetodayPage,
    UploadPage,
    ManagelanguagePage,
    BuyAppAlertPage,
    Vt_popupPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MyridePage,
    ChatsPage,
    FindridePage,
    WalletPage,
    MorePage,
    LoginPage,
    PasswordPage,
    SignupPage,
    VerificationPage,
    CodePage,
    ListridePage,
    FilterPage,
    RiderprofilePage,
    ConfirmridePage,
    ConfirmpopupPage,
    RateriderPage,
    ChattingPage,
    ProfilePage,
    ReviewsPage,
    NotificationPage,
    TermsPage,
    EarnPage,
    RatevroomPage,
    RatevroomPage,
    HelpPage,
    RidetodayPage,
    UploadPage,
    ManagelanguagePage,
    BuyAppAlertPage,
    Vt_popupPage
  ],
  providers: [
    SplashScreen,
    StatusBar,
    Globalization,InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: APP_CONFIG, useValue: BaseAppConfig }
  ]
})
export class AppModule {}
