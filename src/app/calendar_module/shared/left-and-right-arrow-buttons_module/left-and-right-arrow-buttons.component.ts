import { Component, Input, OnInit } from '@angular/core';
import { ButtonData } from './rapid-repeat-arrow-button.component';


@Component({
	selector: 'left-and-right-arrow-buttons',
	template: `
		<div class="left-and-right-arrow-buttons-container">

			<rapid-repeat-arrow-button *ngFor="let buttonData of buttonsData"
				[buttonData]="buttonData" class="control-button"
			></rapid-repeat-arrow-button>

		</div>
	`,
	styles:[`.left-and-right-arrow-buttons-container{ margin-right: 5px; }`]
})
export class LeftAndRightArrowButtonsComponent implements OnInit {

	@Input() leftId;
	@Input() rightId;
	@Input() leftAriaLabel;
	@Input() rightAriaLabel;
	@Input() leftFunction;
	@Input() rightFunction;

	private buttonsData: ButtonData[] = [];


	ngOnInit() {
		this.buttonsData = [
			{
				arrowIcon: 'keyboard_arrow_left',
				id: this.leftId,
				ariaLabel: this.leftAriaLabel,
				context: {function: this.leftFunction}
			},
			{
				arrowIcon: 'keyboard_arrow_right',
				id: this.rightId,
				ariaLabel: this.rightAriaLabel,
				context: {function: this.rightFunction}
			}
		];
	}

}
