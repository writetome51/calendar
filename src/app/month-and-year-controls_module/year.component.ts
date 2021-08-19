import { Component } from '@angular/core';
import { CalendarModelService } from '@app/calendar-model_service/calendar-model.service';


@Component({
	selector: 'app-year',
	template: `
		<div id="year-container">
			<input type="number" id="year"
				   [(ngModel)]="model.year" (change)="model.update()"
				   min="1004" max="9999"
			/>
		</div>
	`
})
export class YearComponent {

	constructor(public model: CalendarModelService) {}

}
