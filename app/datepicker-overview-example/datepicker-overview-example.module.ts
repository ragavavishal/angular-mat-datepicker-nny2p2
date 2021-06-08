import { NgModule } from '@angular/core';

import { MaterialModule, SharedModule } from '../shared';
import {
  DatepickerOverviewExampleComponent,
} from './datepicker-overview-example.component';

@NgModule({
  declarations: [DatepickerOverviewExampleComponent],
  exports: [DatepickerOverviewExampleComponent],
  imports: [
    SharedModule,
    MaterialModule,
  ],
})
export class DatepickerOverviewExampleModule {}
