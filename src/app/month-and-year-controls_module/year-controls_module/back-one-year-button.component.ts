import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { SelectedData } from '../selected.data';


@Component({
	selector: 'back-one-year-button',
	template: `
		<click-execute-rapid-repeat-function [context]="this"
			id="back-one-year-container" class="year-button-container"
		>
			<button mat-icon-button aria-label="subtract one year"
				class="year-button" id="back-one-year"
			>
				<mat-icon>keyboard_arrow_left</mat-icon>
			</button>
		</click-execute-rapid-repeat-function>
	`
})
export class BackOneYearButtonComponent {

	selected = SelectedData;

	constructor(public monthDisplay: MonthDisplayService) {}


	function() {
		--this.selected.year;
		this.monthDisplay.updateOnChangeOfSelectedMonthOrYear();
	}

}
