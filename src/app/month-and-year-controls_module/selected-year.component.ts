import { Component } from '@angular/core';
import { MonthDisplayService } from './month-display_service/month-display.service';
import { StartYearData } from '@app/month-and-year-controls_module/start-year.data';
import { SelectedData } from '@app/month-and-year-controls_module/selected.data';
import { yearValid } from './year-valid.function';


@Component({
	selector: 'selected-year',
	template: `
		<div id="year-container">
			<mat-form-field class="example-full-width" appearance="outline">
				<mat-label hidden>Year</mat-label>

				<input matInput  type="number" id="year" placeholder="Year"
					[min]="startYear" max="9999"
					[(ngModel)]="selected.year"
					(change)="monthDisplay.updateOnChangeOfSelectedMonthOrYear()"
				/>

				<mat-error *ngIf="valid">Year invalid</mat-error>
			</mat-form-field>
		</div>
	`
})
export class SelectedYearComponent {

	selected = SelectedData;
	startYear = StartYearData;
	yearValid = yearValid;

	get valid(){
		return yearValid(this.selected.year);
	}

	constructor(public monthDisplay: MonthDisplayService) {}

}
