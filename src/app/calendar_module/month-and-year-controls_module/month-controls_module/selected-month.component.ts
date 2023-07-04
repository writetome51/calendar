import { Component } from '@angular/core';
import { MonthDisplayService, MonthNamesData, SelectedData }
	from '@writetome51/calendar-helpers';


@Component({
	selector: 'selected-month',
	template: `
		<div id="month-name" class="calendar-input-container">
			<mat-form-field appearance="outline" class="fills-parent-height">

				<mat-select
					id="month-selector"
					class="fills-parent-dimensions"
					[(value)]="selected.month"
					[placeholder]="selected.month"
					(valueChange)="monthDisplay.updateDays(getMonthIndexAndYear())"
				>
					<mat-option
						*ngFor="let monthName of monthNames.data"
						[value]="monthName"
					>
						{{monthName}}
					</mat-option>
				</mat-select>

			</mat-form-field>
		</div>
	`,
	styles: [
		`#month-name {
			display: inline-block;
		}`,
		`mat-form-field {
			width: 140px;
			padding: 0;
		}`,
		`#month-selector {
			padding-left: 4px;
		}`
	]
})
export class SelectedMonthComponent {

	selected = SelectedData;
	monthNames = MonthNamesData;
	monthDisplay = MonthDisplayService;


	getMonthIndexAndYear() {
		return {
			monthIndex: this.monthNames.data.indexOf(this.selected.month),
			year: this.selected.year
		}
	}

}
