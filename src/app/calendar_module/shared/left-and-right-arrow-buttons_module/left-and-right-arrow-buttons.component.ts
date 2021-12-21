import { Component, Input } from '@angular/core';


@Component({
	selector: 'left-and-right-arrow-buttons',
	template: `
		<div class="left-and-right-arrow-buttons-container">
			<arrow-button [arrowIcon]="'keyboard_arrow_left'" [id]="leftId"
				[ariaLabel]="leftAriaLabel" [context]="{function: leftFunction}"
				class="control-button">
			</arrow-button>

			<arrow-button [arrowIcon]="'keyboard_arrow_right'"  [id]="rightId"
				[ariaLabel]="rightAriaLabel" [context]="{function: rightFunction}"
				class="control-button">
			</arrow-button>
		</div>
	`
})
export class LeftAndRightArrowButtonsComponent {

	@Input() leftId;
	@Input() rightId;
	@Input() leftAriaLabel;
	@Input() rightAriaLabel;
	@Input() leftFunction;
	@Input() rightFunction;

}
