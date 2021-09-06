import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';


@Component({
	selector: 'forward-one-month-button',
	template: `
		<click-execute-rapid-repeat-function [context]="this"
			id="forward-one-month-container" class="month-button-container"
		>
			<button mat-icon-button aria-label="add one month"
				class="month-button" id="forward-one-month"
			>
				<mat-icon>keyboard_arrow_up</mat-icon>
			</button>
		</click-execute-rapid-repeat-function>
	`
})
export class ForwardOneMonthButtonComponent {

	constructor(public monthDisplay: MonthDisplayService) {}


	function() {
		this.monthDisplay.goForwardOrBackOne(1);
	}

}
