import { Component } from '@angular/core';
import { ClickExecuteRapidRepeatFunctionContext }
	from '../../shared/click-execute-rapid-repeat-function_module';
import {
	MonthDisplayService as monthDisplay, MonthNamesData as monthNames, SelectedData as selected
} from '@writetome51/calendar-helpers';


@Component({
	selector: 'forward-one-year-button',
	template: `
		<rapid-repeat-mat-icon-button [context]="this" aria-label="add one year"
			id="forward-one-year"
		>
			keyboard_arrow_right
		</rapid-repeat-mat-icon-button>
	`
})
export class ForwardOneYearButtonComponent implements ClickExecuteRapidRepeatFunctionContext {

	function() {
		++selected.year;

		monthDisplay.updateDays({
			monthIndex: monthNames.data.indexOf(selected.month),
			year: selected.year
		});
	}

}
