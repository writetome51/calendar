import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { MonthNamesData } from '../month-names.data';
import { SelectedData } from '@app/month-and-year-controls_module/selected.data';


@Component({
	selector: 'selected-month',
	template: `
		<div id="month-name" class="fills-parent-height">
			<mat-select id="month-selector" name="monthNameOptions"
				class="fills-parent-dimensions"
				[(ngModel)]="selected.month" [(value)]="selected.month"
				(ngModelChange)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
			>
				<mat-option *ngFor="let monthName of monthNames.data" [value]="monthName">
					{{monthName}}
				</mat-option>
			</mat-select>
		</div>
	`,
	styles: [
		`#month-name {
			display: inline;
			width: max-content;
			margin-left: 0;
			margin-right: 0;
			padding-left: 4px;
			padding-right: 4px;
		}`,
		`#month-selector {
			display: inline;
			font-size: 16px;
			padding-left: 4px;
			border: 1px solid lightgrey;
		}`
	]
})
export class SelectedMonthComponent {

	selected = SelectedData;
	monthNames = MonthNamesData;


	constructor(public monthDisplay: MonthDisplayService) {}

}
