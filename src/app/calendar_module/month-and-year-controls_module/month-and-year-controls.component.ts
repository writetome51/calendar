import { Component } from '@angular/core';


@Component({
	selector: 'month-and-year-controls',
	template: `
		<div id="month-and-year-controls">
			<month-controls></month-controls>
			<year-controls></year-controls>
		</div>
	`,
	styles: [
		`#month-and-year-controls {
			display: flex;
			justify-content: center;
		}`
	]
})
export class MonthAndYearControlsComponent {}
