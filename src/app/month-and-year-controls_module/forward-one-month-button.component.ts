import { Component } from '@angular/core';
import { CalendarModelService } from '@app/calendar-model_service/calendar-model.service';


@Component({
	selector: 'forward-one-month-button',
	template: `
		<div id="forward-one-month-container">
			<button class="month-button" id="forward-one-month"
					(click)="model.incrementOrDecrementSelectedMonth(1)">
				->
			</button>
		</div>
	`
})
export class ForwardOneMonthButtonComponent {

	constructor(public model: CalendarModelService) {}

}
