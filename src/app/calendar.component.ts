import { Component } from '@angular/core';


@Component({
	selector: 'app-calendar',
	template: `
		<div id="cal-boundary">
			<month-and-year-controls></month-and-year-controls>

			<day-names></day-names>
			
			<day-squares></day-squares>
		</div>
	`
})
export class CalendarComponent {}
