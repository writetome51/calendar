import { Component } from '@angular/core';
import { CalendarModelService } from '@app/calendar-model_service/calendar-model.service';


@Component({
	selector: 'app-day-squares',
	template: `
		<div class="day-square" *ngFor="let day in model.daysOfCurrentMonth">
			{{day}}
		</div>
	`
})
export class DaySquaresComponent {

	constructor(public model: CalendarModelService) {}

}
