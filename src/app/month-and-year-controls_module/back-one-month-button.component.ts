import { Component } from '@angular/core';
import { MonthService } from './month-display_service/month.service';


@Component({
	selector: 'back-one-month-button',
	template: `
		<div id="back-one-month-container">
			<button class="month-button" id="back-one-month"
					(click)="month.goForwardOrBackOne(-1)"
			>
				<-
			</button>
		</div>
	`
})
export class BackOneMonthButtonComponent {

	constructor(public month: MonthService) {}

}
