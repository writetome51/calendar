import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';


@Component({
	selector: 'back-one-month-button',
	template: `
		<click-execute-rapid-repeat-function [context]="this"
			id="back-one-month-container" class="month-button-container fills-parent-height"
		>
			<button mat-icon-button aria-label="subtract one month" id="back-one-month"
				class="month-button fills-parent-dimensions"
			>
				<mat-icon>keyboard_arrow_left</mat-icon>
			</button>
		</click-execute-rapid-repeat-function>
	`
})
export class BackOneMonthButtonComponent {

	constructor(public monthDisplay: MonthDisplayService) {}


	function() {
		this.monthDisplay.goForwardOrBackOne(-1);
	}

}
