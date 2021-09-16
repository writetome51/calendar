import { Component } from '@angular/core';
import { SelectedData } from '../selected.data';


@Component({
	selector: 'selected-year',
	template: `
		<div id="year-container" class="calendar-input-container">
			{{selected.year}}
		</div>
	`,
	styles: [
		`#year-container {
			padding-left: 8px;
			top: 30px;
		}`
	]
})
export class SelectedYearComponent {

	selected = SelectedData;

}
