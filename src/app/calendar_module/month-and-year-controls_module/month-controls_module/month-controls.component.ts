import { Component } from '@angular/core';
import { MonthDisplayService as monthDisplay } from '@writetome51/calendar-helpers/dist/privy/month-display_service';


@Component({
	selector: 'month-controls',
	template: `
		<div id="month-controls" class="controls-container">

			<left-and-right-arrow-buttons
				[leftId]="'back-one-month-button'" [rightId]="'forward-one-month-button'"
				[leftAriaLabel]="'back-one-month-button'"
				[rightAriaLabel]="'forward-one-month-button'"
				[leftFunction]="leftFunction" [rightFunction]="rightFunction"
			></left-and-right-arrow-buttons>

			<selected-month></selected-month>

		</div>
	`,
	styles: [`
		#month-controls {
			margin-top: 0;
			margin-right: 5px;
		}
	`]
})
export class MonthControlsComponent {

	leftFunction() { monthDisplay.goForwardOrBackOne(-1); }

	rightFunction() { monthDisplay.goForwardOrBackOne(1); }

}
