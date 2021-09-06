import { Component, Input, OnInit } from '@angular/core';
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
	`,
	styles: [`.click-execute-rapid-repeat-function {
		margin:0; padding:0; width:fit-content; height:fit-content;
	}`]
})
export class ClickExecuteRapidRepeatFunctionComponent implements OnInit {

	@Input() context: {
		function: () => void;
		initialDelayBeforeRapid?: number; // ms
		rapidDelay?: number; // ms
	} = { function: () => undefined };

	private readonly __defaultInitialDelayBeforeRapid = 500; // ms
	private readonly __defaultRapidDelay = 70; // ms
	private __clickEnded = true;


	ngOnInit() {
		if (not(this.context.initialDelayBeforeRapid))
			this.context.initialDelayBeforeRapid = this.__defaultInitialDelayBeforeRapid;
		if (not(this.context.rapidDelay)) this.context.rapidDelay = this.__defaultRapidDelay;
	}


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
