import { Component } from '@angular/core';


@Component({
	selector: 'day-names',
	template: `
		<week-block>
			<div class="calendar-day day-name" *ngFor="let dayName of dayNames">
				{{dayName}}
			</div>
		</week-block>
	`,
	styles: [`
		.day-name {
			height: fit-content;
			border: 1px solid transparent;
			padding-bottom: 3px;
			text-align: center;
		}
	`]
})
export class DayNamesComponent {

	readonly dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

}
