import { Component } from '@angular/core';
import { MonthDisplayService as monthDisplay } from '@writetome51/calendar-helpers';
import { ClickExecuteRapidRepeatFunctionContext }
	from '@shared/click-execute-rapid-repeat-function_module/click-execute-rapid-repeat-function-context.interface';


@Component({
	selector: 'forward-one-month-button',
	template: `
		<rapid-repeat-mat-icon-button [context]="this" aria-label="add one month"
			id="forward-one-month" class="month-button fills-parent-dimensions"
		>
			keyboard_arrow_right
		</rapid-repeat-mat-icon-button>
	`
})
export class ForwardOneMonthButtonComponent implements ClickExecuteRapidRepeatFunctionContext {

	function() {
		monthDisplay.goForwardOrBackOne(1);
	}

}
