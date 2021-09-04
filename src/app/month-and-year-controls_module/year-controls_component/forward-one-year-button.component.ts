import { Component } from '@angular/core';
import { MonthDisplayService } from '../month-display_service/month-display.service';
import { SelectedData } from '@app/month-and-year-controls_module/selected.data';
import { RapidRepeatActionButtonComponent } from './rapid-repeat-action-button.abstract.component';


@Component({
	selector: 'forward-one-year-button',
	template: `
		<div id="forward-one-year-container" class="year-button-container">

			<button mat-icon-button aria-label="add one year"
				class="year-button" id="back-one-year"
				(mousedown)="actionOnMousedown()" (mouseup)="stopRapidActionOnMouseup()"
			>
				<mat-icon>keyboard_arrow_up</mat-icon>
			</button>

		</div>
	`
})
export class ForwardOneYearButtonComponent extends RapidRepeatActionButtonComponent {

	selected = SelectedData;

	constructor(public monthDisplay: MonthDisplayService) {
		super();
	}


	protected _singleAction() {
		++this.selected.year;
		this.monthDisplay.updateOnChangeOfSelectedMonthOrYear();
	}

}
