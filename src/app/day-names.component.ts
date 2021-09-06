import { Component } from '@angular/core';


@Component({
	selector: 'day-names',
	template: `
		<div class="week-block">
			<div class="day-name" *ngFor="let dayName of dayNames"> {{dayName}} </div>
		</div>
	`
})
export class DayNamesComponent {

	readonly dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

}
