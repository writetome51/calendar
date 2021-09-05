import { Component } from '@angular/core';
import { MonthDisplayService } from './month-display_service/month-display.service';
import { RapidRepeatActionButtonDirective }
	from './rapid-repeat-action-button.abstract.directive';


@Component({
	selector: 'back-one-month-button',
	template: `
		<div id="back-one-month-container" class="month-button-container">

			<button mat-icon-button aria-label="subtract one month"
					class="month-button" id="back-one-month"
					(mousedown)="startActionOnBegin($event)" (mouseup)="stopActionOnEnd()"
					(touchstart)="startActionOnBegin($event)" (touchend)="stopActionOnEnd()"
			>
				<mat-icon>keyboard_arrow_down</mat-icon>
			</button>

		</div>
	`
})
export class BackOneMonthButtonComponent extends RapidRepeatActionButtonDirective {

	constructor(public monthDisplay: MonthDisplayService) {
		super();
	}

	protected _singleAction() {
		this.monthDisplay.goForwardOrBackOne(-1);
	}

}
