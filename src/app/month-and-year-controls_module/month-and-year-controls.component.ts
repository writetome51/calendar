import { Component } from '@angular/core';


@Component({
	selector: 'month-and-year-controls',
	template: `
		<div id="month-and-year-controls">
			<div id="month-and-buttons">
				<back-one-month-button></back-one-month-button>

				<selected-month-name></selected-month-name>

				<forward-one-month-button></forward-one-month-button>
			</div>

			<app-year></app-year>
		</div>
	`
})
export class MonthAndYearControlsComponent {}
