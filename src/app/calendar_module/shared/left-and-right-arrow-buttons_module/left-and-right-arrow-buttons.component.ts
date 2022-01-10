import { Component, Input, OnInit } from '@angular/core';
import { RapidRepeatArrowButtonData } from './rapid-repeat-arrow-button.component';


@Component({
	selector: 'left-and-right-arrow-buttons',
	template: `
		<div class="left-and-right-arrow-buttons-container">

			<rapid-repeat-arrow-button *ngFor="let context of contexts"
				[context]="context" class="control-button"
			></rapid-repeat-arrow-button>

		</div>
	`,
	styles: [`.left-and-right-arrow-buttons-container {
		margin-right: 5px;
	}`]
})
export class LeftAndRightArrowButtonsComponent implements OnInit {

	@Input() leftFunction;
	@Input() rightFunction;

	contexts: RapidRepeatArrowButtonData[] = [];


	ngOnInit() {
		this.contexts = [
			{
				function: this.leftFunction,
				arrowIcon: 'keyboard_arrow_left'
			},
			{
				function: this.rightFunction,
				arrowIcon: 'keyboard_arrow_right'
			}
		];
	}

}
