import { Component } from '@angular/core';
import { MonthDisplayService } from './month-display_service/month-display.service';
import { VisibleData } from '@app/visible.data';
import { MonthNamesData } from './month-names.data';


@Component({
	selector: 'selected-month',
	template: `
		<div id="month-name">
			<select id="month-selector" name="monthNameOptions"
					[(ngModel)]="visible.selectedMonth"
					(change)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
			>
				<option *ngFor="let monthName of monthNames.data"
						[value]="monthName" [selected]="monthName === visible.selectedMonth"
				>
					{{monthName}}
				</option>
			</select>
		</div>
	`
})
export class SelectedMonthComponent {

	visible = VisibleData;
	monthNames = MonthNamesData;

	constructor(public monthDisplay: MonthDisplayService) {}

}
