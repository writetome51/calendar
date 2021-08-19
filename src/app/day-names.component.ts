import { Component } from '@angular/core';
import { CalendarModelService } from './calendar-model_service/calendar-model.service';


@Component({
	selector: 'day-names',
	template: `
		<div class="day-name" *ngFor="let dayname in model.dayNames">
			{{dayname}}
		</div>
	`
})
export class DayNamesComponent {

	constructor(public model: CalendarModelService) {}

}
