import { Component } from '@angular/core';
import { MonthDisplayService as monthDisplay }
	from '../../shared/month-display_service/month-display.service';
import { SelectedData } from '@shared/selected.data';
import { ClickExecuteRapidRepeatFunctionContext }
	from '@shared/click-execute-rapid-repeat-function_module/click-execute-rapid-repeat-function-context.interface';


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
