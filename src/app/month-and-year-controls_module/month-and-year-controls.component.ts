import { Component } from '@angular/core';


@Component({
	selector: 'month-and-year-controls',
	template: `
		<div id="month-and-year-controls">
			<div id="month-and-buttons">
				<back-one-month-button></back-one-month-button>

				<selected-month></selected-month>

				<forward-one-month-button></forward-one-month-button>
			</div>

			<year-controls></year-controls>
		</div>
	`
})
export class MonthAndYearControlsComponent {}
