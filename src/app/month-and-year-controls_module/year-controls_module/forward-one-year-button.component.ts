import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { SelectedData } from '../selected.data';
import { ClickExecuteRapidRepeatFunctionContext }
	from '@shared/click-execute-rapid-repeat-function_module/click-execute-rapid-repeat-function-context.interface';


@Component({
	selector: 'forward-one-year-button',
	template: `
		<rapid-repeat-mat-icon-button [context]="this" aria-label="add one year"
			class="year-button" id="forward-one-year"
		>
			<mat-icon>keyboard_arrow_right</mat-icon>
		</rapid-repeat-mat-icon-button>
	`
})
export class ForwardOneYearButtonComponent implements ClickExecuteRapidRepeatFunctionContext {

	selected = SelectedData;

	constructor(public monthDisplay: MonthDisplayService) {}


	function() {
		++this.selected.year;
		this.monthDisplay.updateOnChangeOfSelectedMonthOrYear();
	}

}
