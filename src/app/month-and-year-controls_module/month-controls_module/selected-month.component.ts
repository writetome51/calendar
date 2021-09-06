import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { MonthNamesData } from '../month-names.data';
import { SelectedData } from '@app/month-and-year-controls_module/selected.data';


@Component({
	selector: 'selected-month',
	template: `
		<div id="month-name">
			<mat-select id="month-selector" name="monthNameOptions"
				[(ngModel)]="selected.month" [(value)]="selected.month"
				(ngModelChange)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
			>
				<mat-option *ngFor="let monthName of monthNames.data" [value]="monthName">
					{{monthName}}
				</mat-option>
			</mat-select>
		</div>
	`
})
export class SelectedMonthComponent {

	selected = SelectedData;
	monthNames = MonthNamesData;

	constructor(public monthDisplay: MonthDisplayService) {}

}
