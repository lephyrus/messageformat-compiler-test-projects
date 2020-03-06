import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { messages } from './messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gender = 'female';
  public locale = 'en';
  public translations: typeof messages;

  constructor(private translateService: TranslateService) {
    // make messages accessible from template
    this.translations = messages;

    // configure ngx-translate default locale
    this.translateService.setDefaultLang('en');

    // add messages to ngx-translate
    // (note that you would normally use @ngx-translate/http-loader
    // and load messages asynchronously from a JSON file)
    ['en', 'de-CH'].map(locale => {
      this.translateService.setTranslation(
        locale,
        this.translations[locale]
      );
    });
  }

  public onGenderChange(gender: string) {
    this.gender = gender;
  }

  public onLanguageChange(locale: string) {
    this.translateService.use(locale);
    this.locale = locale;
  }
}
