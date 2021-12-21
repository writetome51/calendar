import { Component, Input, OnInit } from '@angular/core';


@Component({
	selector: 'left-and-right-arrow-buttons',
	template: `
		<div class="left-and-right-arrow-buttons-container">

			<arrow-button *ngFor="let button of buttons" [arrowIcon]="button.arrowIcon"
				[id]="button.id" [ariaLabel]="button.ariaLabel"
				[context]="{function: button.function}"
				class="control-button"
			></arrow-button>

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

	buttons: any[] = [];


	ngOnInit() {
		this.buttons = [
			{
				arrowIcon: 'keyboard_arrow_left',
				id: this.leftId,
				ariaLabel: this.leftAriaLabel,
				function: this.leftFunction
			},
			{
				arrowIcon: 'keyboard_arrow_right',
				id: this.rightId,
				ariaLabel: this.rightAriaLabel,
				function: this.rightFunction
			}
		];
	}

}
