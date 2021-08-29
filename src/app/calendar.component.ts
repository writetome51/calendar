import { Component } from '@angular/core';
import { CalendarData } from '@app/calendar.data';


@Component({
	selector: 'app-calendar',
	template: `
		<div id="cal-boundary">
			<month-and-year-controls></month-and-year-controls>

			<day-names></day-names>

			<weeks-of-month [days]="calendar.daysOfMonth"></weeks-of-month>
		</div>
	`
})
export class CalendarComponent {

	calendar = CalendarData;

}
