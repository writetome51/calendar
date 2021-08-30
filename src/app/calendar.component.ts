import { Component } from '@angular/core';
import { VisibleData } from '@app/visible.data';


@Component({
	selector: 'app-calendar',
	template: `
		<div id="cal-boundary">
			<month-and-year-controls></month-and-year-controls>

			<day-names></day-names>

			<weeks-of-month [days]="visible.daysOfMonth"></weeks-of-month>
		</div>
	`
})
export class CalendarComponent {

	visible = VisibleData;

}
