import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'datepicker-overview-example',
  styleUrls: ['datepicker-overview-example.component.scss'],
  templateUrl: 'datepicker-overview-example.component.html',
})
export class DatepickerOverviewExampleComponent {

  myForm : FormGroup;
  constructor(fb : FormBuilder){
    this.myForm = fb.group({
      startDate: [new Date()],
      endDate : [new Date()]
    });

  }


}
