import { Component, Input } from '@angular/core';
import { ClickExecuteRapidRepeatFunctionContext }
	from '../click-execute-rapid-repeat-function_module';


@Component({
	selector: 'rapid-repeat-arrow-button',
	template: `
		<rapid-repeat-mat-icon-button [context]="context"
			class="month-button fills-parent-dimensions"
		>
			{{context.arrowIcon}}
		</rapid-repeat-mat-icon-button>
	`
})
export class RapidRepeatArrowButtonComponent {

	@Input() context: RapidRepeatArrowButtonData = {
		function: () => undefined,
		arrowIcon: 'keyboard_arrow_right',
	};

}


export type RapidRepeatArrowButtonData = ClickExecuteRapidRepeatFunctionContext & {
	arrowIcon: 'keyboard_arrow_right' | 'keyboard_arrow_left';
};
