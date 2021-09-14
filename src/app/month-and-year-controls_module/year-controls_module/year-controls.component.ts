import { Component } from '@angular/core';


@Component({
	selector: 'year-controls',
	template: `
		<div id="year-controls" class="controls-container">

			<selected-year></selected-year>

			<div class="left-and-right-arrow-buttons-container">
				<back-one-year-button></back-one-year-button>
				<forward-one-year-button></forward-one-year-button>
			</div>
		</div>
	`
})
export class YearControlsComponent {}
