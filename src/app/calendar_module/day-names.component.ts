import {Component, Input, OnChanges, OnInit} from '@angular/core';


@Component({
   selector: 'day-names',
   template: `
      <week-block>
         <div class="day-column" *ngFor="let dayName of days">
            <div class="calendar-day day-name">{{dayName}}</div>
         </div>
      </week-block>
   `,
   styles: [
      `.day-column {
         border: 1px solid transparent;
      }`
   ]
})
export class DayNamesComponent implements OnInit, OnChanges {

   @Input() weekBeginsOn: number = 0;
   days: string[] = [];

   private readonly __data = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

   ngOnInit() {
      this.days = this.__getDays();
   }

   ngOnChanges() {
      this.days = this.__getDays();
   }

   private __getDays() {
      const days: string[] = [];

      for (
         let i = this.weekBeginsOn, length = this.__data.length;
         i < length;
         ++i
      ) {
         days.push(this.__data[i]);
      }

      for (let i = 0; i < this.weekBeginsOn; ++i) {
         days.push(this.__data[i]);
      }

      return days;
   }

}
