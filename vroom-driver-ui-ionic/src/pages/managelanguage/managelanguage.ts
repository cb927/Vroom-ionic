import { Component, Inject } from '@angular/core';
import { Events, App } from 'ionic-angular';
import { Constants } from '../../models/constants.models';
import { APP_CONFIG, AppConfig } from '../../app/app.config';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-managelanguage',
  templateUrl: 'managelanguage.html'
})
export class ManagelanguagePage {
  private defaultLanguageCode;

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private events: Events, private app: App) {
    this.defaultLanguageCode = this.config.availableLanguages[0].code;
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    if (defaultLang) this.defaultLanguageCode = defaultLang;
  }

  onLanguageClick(language) {
    this.defaultLanguageCode = language.code;
  }

  languageConfirm() {
    console.log('lllll',this.defaultLanguageCode)
    this.events.publish('language:selection', this.defaultLanguageCode);
    window.localStorage.setItem(Constants.KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
    this.app.getRootNav().setRoot(TabsPage);
  }

}
