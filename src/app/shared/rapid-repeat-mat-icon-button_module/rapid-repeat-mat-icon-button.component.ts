import { Component, Input } from '@angular/core';
import { ClickExecuteRapidRepeatFunctionContext }
	from '@shared/click-execute-rapid-repeat-function_module/click-execute-rapid-repeat-function-context.interface';


@Component({
	selector: 'rapid-repeat-mat-icon-button',
	template: `
		<click-execute-rapid-repeat-function [context]="context">
			<button mat-icon-button (keydown.enter)="context.function()">
				<mat-icon>
					<ng-content></ng-content>
				</mat-icon>
			</button>
		</click-execute-rapid-repeat-function>
	`
})
export class RapidRepeatMatIconButtonComponent {

	@Input() context: ClickExecuteRapidRepeatFunctionContext = { function: () => undefined };

}
