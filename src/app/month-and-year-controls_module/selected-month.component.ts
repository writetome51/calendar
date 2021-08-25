import { Component } from '@angular/core';
import { MonthDisplayService } from './month-display_service/month-display.service';
import { DisplayData } from '@app/display.data';


@Component({
	selector: 'selected-month',
	template: `
		<div id="month-name">
			<select id="month-selector" name="monthNameOptions"
					[(ngModel)]="displayData.selectedMonth"
					(change)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
			>
				<option *ngFor="let monthName of displayData.monthNames"
						[value]="monthName" [selected]="monthName === displayData.selectedMonth"
				>
					{{monthName}}
				</option>
			</select>
		</div>
	`
})
export class SelectedMonthComponent {

	displayData = DisplayData;

	constructor(public monthDisplay: MonthDisplayService) {}

}
