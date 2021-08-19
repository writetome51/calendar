import { CalendarModelService } from '@app/calendar-model_service/calendar-model.service';
import { Component } from '@angular/core';


@Component({
	selector: 'app-calendar',
	template: `
		<div id="cal-boundary">

			<div id="month_and_year">
				<div id="month-and-buttons">
					<back-one-month-button></back-one-month-button>
					
					<app-month-name></app-month-name>

					<forward-one-month-button></forward-one-month-button>
				</div>

				<app-year></app-year>
			</div>

			<app-day-names></app-day-names>
			
			<app-day-squares></app-day-squares>

		</div>
	`
})
export class CalendarComponent {

	constructor(public model: CalendarModelService) {}

}
