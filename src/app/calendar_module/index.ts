import {BrowserModule} from '@angular/platform-browser';
import {CalendarComponent} from './calendar.component';
import {DayNamesComponent} from './day-names.component';
import {MonthAndYearControlsModule} from './month-and-year-controls_module';
import {NgModule} from '@angular/core';
import {WeeksOfMonthComponentModule} from './weeks-of-month-component_module';
import {WeekBlockComponentModule} from './shared/week-block-component_module';


@NgModule({
   declarations: [
      CalendarComponent,
      DayNamesComponent
   ],
   imports: [
      BrowserModule,
      MonthAndYearControlsModule,
      WeeksOfMonthComponentModule,
      WeekBlockComponentModule,
   ],
   exports: [CalendarComponent]
})
export class CalendarModule {
}
