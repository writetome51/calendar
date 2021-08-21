import { Component } from '@angular/core';
import { MonthDisplayService } from '@app/month-display_service/month-display.service';
import { MonthNamesData } from '@app/data/month-names.data';
import { SelectedMonthData } from '@app/data/selected-month.data';


@Component({
	selector: 'selected-month-name',
	template: `
		<div id="month-name">
			<select id="month-selector" name="monthNameOptions"
					[(ngModel)]="selectedMonthName"
					(change)="monthDisplay.updateOnChangeOf_selectedMonth()"
			>
				<option *ngFor="let monthName in monthNames">
					{{monthName}}
				</option>
			</select>
		</div>
	`
})
export class SelectedMonthNameComponent {

	selectedMonthName = SelectedMonthData;
	monthNames = MonthNamesData;

	constructor(public monthDisplay: MonthDisplayService) {}

}
