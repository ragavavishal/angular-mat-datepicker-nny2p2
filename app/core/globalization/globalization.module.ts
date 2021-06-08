import { registerLocaleData } from '@angular/common';
import britishLocale from '@angular/common/locales/en-GB';
import { NgModule, LOCALE_ID } from '@angular/core';

const britishLocaleId: string = 'en-GB';

registerLocaleData(britishLocale, britishLocaleId );

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: britishLocaleId },
  ],
})
export class GlobalizationModule {}
