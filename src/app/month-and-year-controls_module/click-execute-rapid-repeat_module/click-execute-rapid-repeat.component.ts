import { Component, Input } from '@angular/core';


@Component({
	selector: 'click-execute-rapid-repeat',
	template: `
		<div (mousedown)="startActionOnBegin($event)" (mouseup)="stopActionOnEnd()"
			 (touchstart)="startActionOnBegin($event)" (touchend)="stopActionOnEnd()"
		>
			<ng-content></ng-content>
		</div>
	`
})
export class ClickExecuteRapidRepeatComponent {

	@Input() context: { action: (() => void) } = {action: () => undefined};
	@Input() initialDelayBeforeRapid = 500; // ms
	@Input() rapidDelay = 70; // ms

	private __clickEnded = true;


	startActionOnBegin(event) {
		event.preventDefault();
		event.stopPropagation();

		if (!(this.__clickEnded)) return;
		this.__clickEnded = false;
		this.context.action();

		const outerInterval = setInterval(
			() => {
				const inner = setInterval(() => this.__actionToRepeat(inner), this.rapidDelay);
				clearInterval(outerInterval);
			},
			this.initialDelayBeforeRapid // only happens once
		);
	}


	stopActionOnEnd() {
		this.__clickEnded = true;
	}


	private __actionToRepeat(interval) {
		if (!(this.__clickEnded)) this.context.action();
		else clearInterval(interval);
	}

}
