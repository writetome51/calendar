import { Component } from '@angular/core';
import { MonthDisplayService } from './month-display_service/month-display.service';
import { MonthNamesData } from './month-names.data';
import { SelectedData } from '@app/month-and-year-controls_module/selected.data';


@Component({
	selector: 'selected-month',
	template: `
		<div id="month-name">
			<select id="month-selector" name="monthNameOptions"
					[(ngModel)]="selected.month"
					(change)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
			>
				<option *ngFor="let monthName of monthNames.data"
						[value]="monthName" [selected]="monthName === selected.month"
				>
					{{monthName}}
				</option>
			</select>
		</div>
	`
})
export class SelectedMonthComponent {

	selected = SelectedData;
	monthNames = MonthNamesData;

	constructor(public monthDisplay: MonthDisplayService) {}

}
