import { Component } from '@angular/core';


@Component({
	selector: 'month-controls',
	template: `
		<div id="month-controls">
			<selected-month></selected-month>

			<div class="up-and-down-buttons-container">
				<forward-one-month-button></forward-one-month-button>
				<back-one-month-button></back-one-month-button>
			</div>
		</div>
	`
})
export class MonthControlsComponent {}
