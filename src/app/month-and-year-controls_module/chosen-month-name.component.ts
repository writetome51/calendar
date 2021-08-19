import { Component } from '@angular/core';
import { CalendarModelService } from '@app/calendar-model_service/calendar-model.service';


@Component({
	selector: 'chosen-month-name',
	template: `
		<div id="month-name">
			<select id="month-selector" name="monthNameOptions"
					[(ngModel)]="model.chosenMonthName" (change)="model.update()"
			>
				<option *ngFor="let monthName in model.monthNames">
					{{monthName}}
				</option>
			</select>
		</div>
	`
})
export class ChosenMonthNameComponent {

	constructor(public model: CalendarModelService) {}

}
