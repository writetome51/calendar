import { Component } from '@angular/core';
import { ClickExecuteRapidRepeatFunctionContext }
	from '../../shared/click-execute-rapid-repeat-function_module';
import {
	MonthDisplayService as monthDisplay, MonthNamesData as monthNames, SelectedData as selected
} from '@writetome51/calendar-helpers';


@Component({
	selector: 'back-one-year-button',
	template: `
		<rapid-repeat-mat-icon-button [context]="this" aria-label="subtract one year"
			id="back-one-year"
		>
			keyboard_arrow_left
		</rapid-repeat-mat-icon-button>
	`
})
export class BackOneYearButtonComponent implements ClickExecuteRapidRepeatFunctionContext {

	function() {
		--selected.year;

		monthDisplay.updateDays({
			monthIndex: monthNames.data.indexOf(selected.month),
			year: selected.year
		});
	}

}
