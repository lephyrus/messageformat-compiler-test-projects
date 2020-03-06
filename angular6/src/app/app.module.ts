import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateCompiler, TranslateModule } from '@ngx-translate/core';
import { TranslateMessageFormatCompiler, MESSAGE_FORMAT_CONFIG } from 'ngx-translate-messageformat-compiler';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{
    provide: MESSAGE_FORMAT_CONFIG,
    useValue: { locales: ['en', 'de-CH'] }
  }]
})
export class AppModule { }
