import { Component } from '@angular/core';
import { MonthService } from './month-display_service/month.service';
import { DisplayData } from '@app/data/display.data';


@Component({
	selector: 'app-year',
	template: `
		<div id="year-container">
			<input type="number" id="year"
				   [(ngModel)]="display.year"
				   (change)="month.updateOnChangeOfSelectedMonthOrYear()"
				   min="1004" max="9999"
			/>
		</div>
	`
})
export class YearComponent {

	display = DisplayData;

	constructor(public month: MonthService) {}

}
