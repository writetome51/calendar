import { Component } from '@angular/core';


@Component({
	selector: 'day-names',
	template: `
		<week-block>
			<div class="day-name" *ngFor="let dayName of dayNames"> {{dayName}} </div>
		</week-block>
	`,
	styles: [`
		.day-name {
			display: inline-block;
			width: 12.5%;
			height: 14px;
			border: 1px solid transparent;
			padding-left: 2px;
			padding-bottom: 6px;
			margin-left: 2px;
			text-align: center;
		}
	`]
})
export class DayNamesComponent {

	readonly dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

}
