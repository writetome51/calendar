import { Component } from '@angular/core';


@Component({
	selector: 'month-controls',
	template: `
		<div id="month-controls" class="controls-container">

			<div class="left-and-right-arrow-buttons-container">
				<back-one-month-button></back-one-month-button>
				<forward-one-month-button></forward-one-month-button>
			</div>

			<selected-month></selected-month>
		</div>
	`,
	styles: [`
		#month-controls {
			margin-top: 0;
			margin-right: 15px;
		}`]
})
export class MonthControlsComponent {}
