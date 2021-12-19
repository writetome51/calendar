import { Component } from '@angular/core';


@Component({
	selector: 'month-controls',
	template: `
		<div id="month-controls" class="controls-container">

			<div class="left-and-right-arrow-buttons-container">
				<back-one-month-button class="control-button"></back-one-month-button>
				<forward-one-month-button class="control-button"></forward-one-month-button>
			</div>

			<selected-month></selected-month>
		</div>
	`,
	styles: [`
		#month-controls {
			margin-top: 0;
			margin-right: 5px;
		}
		.left-and-right-arrow-buttons-container{
			margin-right: 5px;
		}
	`]
})
export class MonthControlsComponent {}
