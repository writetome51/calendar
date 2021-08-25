import { Component } from '@angular/core';
import { MonthDisplayService } from './month-display_service/month-display.service';
import { DisplayData } from '@app/display.data';


@Component({
	selector: 'selected-year',
	template: `
		<div id="year-container">
			<input type="number" id="year"
				   [(ngModel)]="displayData.selectedYear"
				   (change)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
				   min="1004" max="9999"
			/>
		</div>
	`
})
export class SelectedYearComponent {

	displayData = DisplayData;

	constructor(public monthDisplay: MonthDisplayService) {}

}
