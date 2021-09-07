import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';


@Component({
	selector: 'forward-one-month-button',
	template: `
		<click-execute-rapid-repeat-function [context]="this"
			id="forward-one-month-container" class="month-button-container fills-parent-height"
		>
			<button mat-icon-button aria-label="add one month" id="forward-one-month"
				class="month-button fills-parent-dimensions"
			>
				<mat-icon>keyboard_arrow_right</mat-icon>
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
