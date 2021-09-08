import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { MonthNamesData } from '@shared/month-names.data';
import { SelectedData } from '@app/month-and-year-controls_module/selected.data';


@Component({
	selector: 'selected-month',
	template: `
		<div id="month-name" class="fills-parent-height">

			<mat-form-field appearance="outline" class="fills-parent-height">
				<mat-select id="month-selector" class="fills-parent-height"
							[(value)]="selected.month" [placeholder]="selected.month"
							(valueChange)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
				>
					<mat-option *ngFor="let monthName of monthNames.data" [value]="monthName">
						{{monthName}}
					</mat-option>
				</mat-select>
			</mat-form-field>

		</div>
	`,
	styles: [
		`#month-name {
			display: inline;
			height:50px;
			margin-left: 0;
			margin-right: 0;
			padding-left: 4px;
			padding-right: 4px;
		}`,
		`mat-form-field {
			width: 100px;
			height:50px;
			padding: 0;
		}`,
		`mat-select {
			padding: 0;
			width:100%;
			height:50px;
		}`,
		`#month-selector {
			display: inline;
			font-size: 0.25em;
			padding-left: 4px;
		}`
	]
})
export class SelectedMonthComponent {

	selected = SelectedData;
	monthNames = MonthNamesData;


	constructor(public monthDisplay: MonthDisplayService) {
	}

}
