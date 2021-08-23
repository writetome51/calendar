import { Component } from '@angular/core';
import { MonthService } from '@app/month-and-year-controls_module/month_service/month.service';


@Component({
	selector: 'forward-one-month-button',
	template: `
		<div id="forward-one-month-container">
			<button class="month-button" id="forward-one-month"
				(click)="month.goForwardOrBackOne(1)"
			>
				->
			</button>
		</div>
	`
})
export class ForwardOneMonthButtonComponent {

	constructor(public month: MonthService) {}

}
