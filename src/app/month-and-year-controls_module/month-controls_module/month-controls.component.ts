import { Component } from '@angular/core';


@Component({
	selector: 'month-controls',
	template: `
		<div id="month-controls">
			<back-one-month-button></back-one-month-button>
			<selected-month></selected-month>
			<forward-one-month-button></forward-one-month-button>
		</div>
	`,
	styles: [`
		#month-controls {
			display: inline-block;
			height: 50px;
			font-size: 28px;
			margin-top: 4px;
			margin-right: 15px;
		}
	`]
})
export class MonthControlsComponent {}
