import { Component } from '@angular/core';
import { MonthDisplayService } from './month-display_service/month-display.service';
import { CalendarData } from '@app/calendar.data';
import { StartYearData } from '@app/month-and-year-controls_module/start-year.data';


@Component({
	selector: 'selected-year',
	template: `
		<div id="year-container">
			<input type="number" id="year"
				   [(ngModel)]="calendar.selectedYear"
				   (change)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
				   [min]="startYear" max="9999"
			/>
		</div>
	`
})
export class SelectedYearComponent {

	calendar = CalendarData;
	startYear = StartYearData;

	constructor(public monthDisplay: MonthDisplayService) {}

}
