import { Component } from '@angular/core';
import {
	MonthDisplayService as monthDisplay, MonthNamesData as monthNames, SelectedData as selected
} from '@writetome51/calendar-helpers';


@Component({
	selector: 'year-controls',
	template: `
		<div id="year-controls" class="controls-container">

			<selected-year></selected-year>

			<left-and-right-arrow-buttons
				[leftId]="'back-one-year-button'" [rightId]="'forward-one-year-button'"
				[leftAriaLabel]="'back-one-year-button'"
				[rightAriaLabel]="'forward-one-year-button'"
				[leftFunction]="backOneYear" [rightFunction]="forwardOneYear"
			></left-and-right-arrow-buttons>

		</div>
	`
})
export class YearControlsComponent {

	backOneYear = () => {
		--selected.year;
		this.__updateDaysOfMonth(selected);
	};

	forwardOneYear = () => {
		++selected.year;
		this.__updateDaysOfMonth(selected);
	};

	private __updateDaysOfMonth(selected) {
		monthDisplay.updateDays({
			monthIndex: monthNames.data.indexOf(selected.month),
			year: selected.year
		});
	}

}
