import { Component } from '@angular/core';


@Component({
	selector: 'month-and-year-controls',
	template: `
		<div id="month-and-year-controls">
			<month-controls></month-controls>
			<year-controls></year-controls>
		</div>
	`
})
export class MonthAndYearControlsComponent {}
