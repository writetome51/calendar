import { Component } from '@angular/core';
import { MonthDisplayService } from './month-display_service/month-display.service';
import { CalendarData } from '@app/calendar.data';


@Component({
	selector: 'selected-year',
	template: `
		<div id="year-container">
			<input type="number" id="year"
				   [(ngModel)]="calendar.selectedYear"
				   (change)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
				   [min]="calendar.startYear" max="9999"
			/>
		</div>
	`
})
export class SelectedYearComponent {

	calendar = CalendarData;

	constructor(public monthDisplay: MonthDisplayService) {}

}
