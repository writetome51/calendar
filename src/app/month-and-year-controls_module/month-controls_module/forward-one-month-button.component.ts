import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { RapidRepeatActionButtonDirective } from '../rapid-repeat-action-button.abstract.directive';


@Component({
	selector: 'forward-one-month-button',
	template: `
		<div id="forward-one-month-container" class="month-button-container">

			<button mat-icon-button aria-label="add one month"
					class="month-button" id="forward-one-month"
					(mousedown)="startActionOnBegin($event)" (mouseup)="stopActionOnEnd()"
					(touchstart)="startActionOnBegin($event)" (touchend)="stopActionOnEnd()"
			>
				<mat-icon>keyboard_arrow_up</mat-icon>
			</button>

		</div>
	`
})
export class ForwardOneMonthButtonComponent extends RapidRepeatActionButtonDirective {

	constructor(public monthDisplay: MonthDisplayService) {
		super();
	}

	protected _singleAction() {
		this.monthDisplay.goForwardOrBackOne(1);
	}

}
