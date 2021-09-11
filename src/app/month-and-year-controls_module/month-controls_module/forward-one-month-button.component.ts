import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { ClickExecuteRapidRepeatFunctionContext }
	from '@shared/click-execute-rapid-repeat-function_module/click-execute-rapid-repeat-function-context.interface';


@Component({
	selector: 'forward-one-month-button',
	template: `
		<rapid-repeat-mat-icon-button [context]="this" aria-label="add one month"
			id="forward-one-month" class="month-button fills-parent-dimensions"
		>
			<mat-icon>keyboard_arrow_right</mat-icon>
		</rapid-repeat-mat-icon-button>
	`
})
export class ForwardOneMonthButtonComponent implements ClickExecuteRapidRepeatFunctionContext {

	constructor(public monthDisplay: MonthDisplayService) {}


	function() {
		this.monthDisplay.goForwardOrBackOne(1);
	}

}
