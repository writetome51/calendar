import { Component, Input } from '@angular/core';
import { ClickExecuteRapidRepeatFunctionContext }
	from './click-execute-rapid-repeat-function-context.interface';
import { not } from '@writetome51/not';


@Component({
	selector: 'click-execute-rapid-repeat-function',
	template: `
		<div class="click-execute-rapid-repeat-function"
			(mousedown)="start($event)" (mouseup)="stop()"
			(touchstart)="start($event)" (touchend)="stop()"
		>
			<ng-content></ng-content>
		</div>
	`
})
export class ClickExecuteRapidRepeatFunctionComponent {

	@Input() context: ClickExecuteRapidRepeatFunctionContext = {
		function: () => void 0,
		initialDelayBeforeRapid: 500, // ms
		rapidDelay: 70 // ms
	};

	private __clickEnded = true;


	start(event) {
		event.preventDefault();
		event.stopPropagation();

		if (not(this.__clickEnded)) return;
		this.__clickEnded = false;
		this.context.function();

		const outerInterval = setInterval(
			() => {
				const inner = setInterval(
					() => this.__actionToRepeat(inner), this.context.rapidDelay
				);
				clearInterval(outerInterval);
			},
			this.context.initialDelayBeforeRapid // only happens once
		);
	}


	stop() {
		this.__clickEnded = true;
	}


	private __actionToRepeat(interval) {
		if (not(this.__clickEnded)) this.context.function();
		else clearInterval(interval);
	}

}
