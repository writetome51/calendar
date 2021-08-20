import { Component } from '@angular/core';
import { CalendarModelService } from '@app/calendar-model_service/calendar-model.service';


@Component({
	selector: 'selected-month-name',
	template: `
		<div id="month-name">
			<select id="month-selector" name="monthNameOptions"
					[(ngModel)]="model.selectedMonthName"
					(change)="model.updateOnChangeOf_selectedMonthName()"
			>
				<option *ngFor="let monthName in model.monthNames">
					{{monthName}}
				</option>
			</select>
		</div>
	`
})
export class SelectedMonthNameComponent {

	constructor(public model: CalendarModelService) {}

}
