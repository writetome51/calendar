import { Component } from '@angular/core';


@Component({
	selector: 'day-names',
	template: `
		<div class="week-block">
			<div class="calendar-day day-name" *ngFor="let dayName of data">
				{{dayName}}
			</div>
		</div>
	`,
	styles: [
		`.day-name {
			border: 1px solid transparent;
			padding-bottom: 3px;
			text-align: center;
		}`
	]
})
export class DayNamesComponent {

	readonly data = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

}
