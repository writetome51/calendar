import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { SelectedData } from '../selected.data';


@Component({
	selector: 'forward-one-year-button',
	template: `
		<click-execute-rapid-repeat-function [context]="this"
			id="forward-one-year-container" class="year-button-container"
		>
			<button mat-icon-button aria-label="add one year"
				class="year-button" id="forward-one-year"
			>
				<mat-icon>keyboard_arrow_right</mat-icon>
			</button>
		</click-execute-rapid-repeat-function>
	`
})
export class ForwardOneYearButtonComponent {

	selected = SelectedData;

	constructor(public monthDisplay: MonthDisplayService) {}


	function() {
		++this.selected.year;
		this.monthDisplay.updateOnChangeOfSelectedMonthOrYear();
	}

}
