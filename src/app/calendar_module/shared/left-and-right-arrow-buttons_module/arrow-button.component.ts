import { Component, Input } from '@angular/core';
import { ClickExecuteRapidRepeatFunctionContext }
	from '../../shared/click-execute-rapid-repeat-function_module';


@Component({
	selector: 'arrow-button',
	template: `
		<rapid-repeat-mat-icon-button
			[context]="buttonData.context" aria-label="{{buttonData.ariaLabel}}"
			id="{{buttonData.id}}" class="month-button fills-parent-dimensions"
		>
			{{buttonData.arrowIcon}}
		</rapid-repeat-mat-icon-button>
	`
})
export class ArrowButtonComponent {

	@Input() buttonData: ButtonData | undefined;

}

export type ButtonData = {
	arrowIcon: 'keyboard_arrow_right' | 'keyboard_arrow_left' | undefined;
	id: string;
	ariaLabel: string;
	context: ClickExecuteRapidRepeatFunctionContext;
};
