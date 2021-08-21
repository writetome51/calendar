import { Component } from '@angular/core';
import { MonthDisplayService } from '@app/month-display_service/month-display.service';
import { YearData } from '../data/year.data';


@Component({
	selector: 'app-year',
	template: `
		<div id="year-container">
			<input type="number" id="year"
				[(ngModel)]="year" (change)="monthDisplay.updateDaysOfSelectedMonth()" 
				min="1004" max="9999"
			/>
		</div>
	`
})
export class YearComponent {

	year = YearData;

	constructor(public monthDisplay: MonthDisplayService) {}

}
