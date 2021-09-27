import { Component } from '@angular/core';
import { MonthDisplayService as monthDisplay } from '@writetome51/calendar-helpers';
import { ClickExecuteRapidRepeatFunctionContext }
	from '@shared/click-execute-rapid-repeat-function_module/click-execute-rapid-repeat-function-context.interface';


@Component({
	selector: 'back-one-month-button',
	template: `
		<rapid-repeat-mat-icon-button [context]="this" aria-label="subtract one month"
			id="back-one-month" class="month-button fills-parent-dimensions"
		>
			keyboard_arrow_left
		</rapid-repeat-mat-icon-button>
	`
})
export class BackOneMonthButtonComponent implements ClickExecuteRapidRepeatFunctionContext {

	function() {
		monthDisplay.goForwardOrBackOne(-1);
	}

}
