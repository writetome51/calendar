import { Component } from '@angular/core';
import { ClickExecuteRapidRepeatFunctionContext }
	from '../../shared/click-execute-rapid-repeat-function_module';
import { MonthDisplayService as monthDisplay, SelectedData }
	from '@writetome51/calendar-helpers';


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

	selected = SelectedData;


	function() {
		--this.selected.year;
		monthDisplay.updateOnChangeOfSelectedMonthOrYear();
	}

}
