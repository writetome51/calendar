import { Component } from '@angular/core';
import { MonthService } from './month_service/month.service';
import { DisplayData } from '@app/data/display.data';


@Component({
	selector: 'selected-year',
	template: `
		<div id="year-container">
			<input type="number" id="year"
				   [(ngModel)]="display.selectedYear"
				   (change)="month.updateOnChangeOfSelectedMonthOrYear()"
				   min="1004" max="9999"
			/>
		</div>
	`
})
export class SelectedYearComponent {

	display = DisplayData;

	constructor(public month: MonthService) {}

}
