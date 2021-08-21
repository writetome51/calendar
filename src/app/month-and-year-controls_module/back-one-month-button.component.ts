import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';


@Component({
	selector: 'back-one-month-button',
	template: `
		<div id="back-one-month-container">
			<button class="month-button" id="back-one-month"
				(click)="monthDisplay.goForwardOrBackOneMonth(-1)"
			>
				<-
			</button>
		</div>
	`
})
export class BackOneMonthButtonComponent {

	constructor(public monthDisplay: MonthDisplayService) {}

}
