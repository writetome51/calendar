import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { SelectedData } from '@app/month-and-year-controls_module/selected.data';
import { RapidRepeatActionButtonDirective } from './rapid-repeat-action-button.abstract.directive';


@Component({
	selector: 'forward-one-year-button',
	template: `
		<div id="forward-one-year-container" class="year-button-container">

			<button mat-icon-button aria-label="add one year"
				class="year-button" id="forward-one-year"
				(mousedown)="startActionOnBegin($event)" (mouseup)="stopActionOnEnd()"
				(touchstart)="startActionOnBegin($event)" (touchend)="stopActionOnEnd()"
			>
				<mat-icon>keyboard_arrow_up</mat-icon>
			</button>

		</div>
	`
})
export class ForwardOneYearButtonComponent extends RapidRepeatActionButtonDirective {

	selected = SelectedData;

	constructor(public monthDisplay: MonthDisplayService) {
		super();
	}


	protected _singleAction() {
		++this.selected.year;
		this.monthDisplay.updateOnChangeOfSelectedMonthOrYear();
	}

}
