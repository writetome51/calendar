import { Component } from '@angular/core';
import { MonthDisplayService } from './month-display_service/month-display.service';


@Component({
	selector: 'forward-one-month-button',
	template: `
		<div id="forward-one-month-container">
			<button class="month-button" id="forward-one-month"
				(click)="monthDisplay.goForwardOrBackOne(1)"
			>
				->
			</button>
		</div>
	`
})
export class ForwardOneMonthButtonComponent {

	constructor(public monthDisplay: MonthDisplayService) {}

}
