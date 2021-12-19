import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { DayNamesComponent } from './day-names.component';
import { WeeksOfMonthModule } from './weeks-of-month_module';
import { MonthAndYearControlsModule } from './month-and-year-controls_module';


@NgModule({
	declarations: [
		CalendarComponent,
		DayNamesComponent
	],
	imports: [
		BrowserModule,
		WeeksOfMonthModule,
		MonthAndYearControlsModule,
	],
	exports: [CalendarComponent]
})
export class CalendarModule {}
