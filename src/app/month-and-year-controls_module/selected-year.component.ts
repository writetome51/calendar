import { Component } from '@angular/core';
import { MonthDisplayService } from './month-display_service/month-display.service';
import { StartYearData } from '@app/month-and-year-controls_module/start-year.data';
import { SelectedData } from '@app/month-and-year-controls_module/selected.data';


@Component({
	selector: 'selected-year',
	template: `
		<div id="year-container">
			<input type="number" id="year"
				   [(ngModel)]="selected.year"
				   (change)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
				   [min]="startYear" max="9999"
			/>
		</div>
	`
})
export class SelectedYearComponent {

	selected = SelectedData;
	startYear = StartYearData;

	constructor(public monthDisplay: MonthDisplayService) {}

}
