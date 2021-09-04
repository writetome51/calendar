import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { SelectedData } from '../selected.data';
import { RapidRepeatActionButtonDirective } from './rapid-repeat-action-button.abstract.directive';


@Component({
	selector: 'back-one-year-button',
	template: `
		<div id="back-one-year-container" class="year-button-container">

			<button mat-icon-button aria-label="subtract one year"
				class="year-button" id="back-one-year"
				(mousedown)="startActionOnBegin()" (mouseup)="stopActionOnEnd()"
				(touchstart)="startActionOnBegin()" (touchend)="stopActionOnEnd()"
			>
				<mat-icon>keyboard_arrow_down</mat-icon>
			</button>

		</div>
	`
})
export class BackOneYearButtonComponent extends RapidRepeatActionButtonDirective {

	selected = SelectedData;

	constructor(public monthDisplay: MonthDisplayService) {
		super();
	}


	protected _singleAction() {
		--this.selected.year;
		this.monthDisplay.updateOnChangeOfSelectedMonthOrYear();
	}

}
