import { Component } from '@angular/core';
import { CalendarModelService } from '@app/calendar-model_service/calendar-model.service';


@Component({
	selector: 'back-one-month-button',
	template: `
		<div id="back-one-month-container">
			<button class="month-button" id="back-one-month"
					(click)="model.incrementOrDecrementSelectedMonth(-1)">
				<-
			</button>
		</div>
	`
})
export class BackOneMonthButtonComponent {

	constructor(public model: CalendarModelService) {}

}
