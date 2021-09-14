import { Component } from '@angular/core';


@Component({
	selector: 'day-names',
	template: `
		<div class="week-block">
			<div class="day-column" *ngFor="let dayName of data">
				<div class="calendar-day day-name">{{dayName}}</div>
			</div>
		</div>
	`
})
export class DayNamesComponent {

	readonly data = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

}
