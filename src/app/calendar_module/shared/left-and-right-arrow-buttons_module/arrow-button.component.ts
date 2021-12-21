import { Component, Input } from '@angular/core';
import { ClickExecuteRapidRepeatFunctionContext }
	from '../../shared/click-execute-rapid-repeat-function_module';


@Component({
	selector: 'arrow-button',
	template: `
		<rapid-repeat-mat-icon-button [context]="context" aria-label="{{ariaLabel}}"
			id="{{id}}" class="month-button fills-parent-dimensions"
		>
			{{arrowIcon}}
		</rapid-repeat-mat-icon-button>
	`
})
export class ArrowButtonComponent {

	@Input() arrowIcon: 'keyboard_arrow_right' | 'keyboard_arrow_left' | undefined;
	@Input() id = '';
	@Input() ariaLabel = '';
	@Input() context: ClickExecuteRapidRepeatFunctionContext = { function: () => void 0 };

}
