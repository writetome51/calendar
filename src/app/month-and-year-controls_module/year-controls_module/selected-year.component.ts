import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { StartYearData } from '@app/month-and-year-controls_module/start-year.data';
import { SelectedData } from '@app/month-and-year-controls_module/selected.data';
import { yearValid } from '../year-valid.function';


@Component({
	selector: 'selected-year',
	template: `
		<div id="year-container">
			<mat-form-field appearance="outline">
				<mat-label hidden>Year</mat-label>

				<input matInput type="number" id="year" placeholder="Year"
					   [min]="startYear" max="9999"
					   [(ngModel)]="selected.year"
					   (change)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
				/>

				<mat-error *ngIf="!(yearValid(selected.year))">
					Must be within 1004 - 9999
				</mat-error>
			</mat-form-field>
		</div>
	`,
	styles: [
		`#year-container {
			display: inline-block;
			position: relative;
			width: 105px;
			height: 50px;
		}`,
		`#year-container mat-form-field {
			width: 100%;
			height: 100%;
		}`,
		`#year-container mat-error {
			margin-top: 10px;
		}`,
		`#year {
			font-size: 24px;
			margin-top: 3px;
			padding-left: 5px;
		}`
	]
})
export class SelectedYearComponent {

	selected = SelectedData;
	startYear = StartYearData;
	yearValid = yearValid;


	constructor(public monthDisplay: MonthDisplayService) {}

}
