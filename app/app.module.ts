import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { DatepickerOverviewExampleModule } from './datepicker-overview-example';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CoreModule,
    DatepickerOverviewExampleModule,
  ],
})
export class AppModule {}
