import { Component } from '@angular/core';


@Component({
	selector: 'year-controls',
	template: `
		<div id="year-controls">
			<selected-year></selected-year>

			<div class="up-and-down-buttons-container">
				<forward-one-year-button></forward-one-year-button>
				<back-one-year-button></back-one-year-button>
			</div>
		</div>
	`
})
export class YearControlsComponent {}
