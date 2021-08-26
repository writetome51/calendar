import { Component } from '@angular/core';
import { MonthDisplayService } from './month-display_service/month-display.service';
import { CalendarData } from '@app/calendar.data';


@Component({
	selector: 'selected-month',
	template: `
		<div id="month-name">
			<select id="month-selector" name="monthNameOptions"
					[(ngModel)]="calendar.selectedMonth"
					(change)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
			>
				<option *ngFor="let monthName of calendar.monthNames"
						[value]="monthName" [selected]="monthName === calendar.selectedMonth"
				>
					{{monthName}}
				</option>
			</select>
		</div>
	`
})
export class SelectedMonthComponent {

	calendar = CalendarData;

	constructor(public monthDisplay: MonthDisplayService) {}

}
