import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { SelectedData } from '../selected.data';
import { ClickExecuteRapidRepeatFunctionContext }
	from '@shared/click-execute-rapid-repeat-function_module/click-execute-rapid-repeat-function-context.interface';


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

	constructor(public monthDisplay: MonthDisplayService) {}


	function() {
		--this.selected.year;
		this.monthDisplay.updateOnChangeOfSelectedMonthOrYear();
	}

}
