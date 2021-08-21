import { Component } from '@angular/core';
import { MonthService } from './month-display_service/month.service';
import { DisplayData } from '@app/data/display.data';


@Component({
	selector: 'selected-month',
	template: `
		<div id="month-name">
			<select id="month-selector" name="monthNameOptions"
					[(ngModel)]="display.selectedMonth"
					(change)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
			>
				<option *ngFor="let monthName of display.monthNames"
						[value]="monthName" [selected]="monthName === display.selectedMonth"
				>
					{{monthName}}
				</option>
			</select>
		</div>
	`
})
export class SelectedMonthComponent {

	display = DisplayData;

	constructor(public monthDisplay: MonthService) {}

}
