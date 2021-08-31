import { Component } from '@angular/core';
import { DaysOfMonthData } from './days-of-month.data';


@Component({
	selector: 'app-calendar',
	template: `
		<div id="cal-boundary">
			<month-and-year-controls></month-and-year-controls>

			<day-names></day-names>

			<weeks-of-month [days]="daysOfMonth.data"></weeks-of-month>
		</div>
	`
})
export class CalendarComponent {

	daysOfMonth = DaysOfMonthData;

}
