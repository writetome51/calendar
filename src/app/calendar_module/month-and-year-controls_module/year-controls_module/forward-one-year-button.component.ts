import { Component } from '@angular/core';
import { ClickExecuteRapidRepeatFunctionContext }
	from '../../shared/click-execute-rapid-repeat-function_module';
import { MonthDisplayService as monthDisplay, SelectedData }
	from '@writetome51/calendar-helpers';


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

	selected = SelectedData;


	function() {
		++this.selected.year;
		monthDisplay.updateOnChangeOfSelectedMonthOrYear();
	}

}
