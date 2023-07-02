import { Component } from '@angular/core';


@Component({
	selector: 'day-names',
	template: `
		<week-block>
			<div class="day-column" *ngFor="let dayName of data">
				<div class="calendar-day day-name">{{dayName}}</div>
			</div>
		</week-block>
	`,
	styles:[`.day-column {border: 1px solid transparent;}`]
})
export class DayNamesComponent {

	readonly data = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

}
