import { Component, Input, OnInit } from '@angular/core';
import { ClickExecuteRapidRepeatFunctionContext }
	from './click-execute-rapid-repeat-function-context.interface';
import { not } from '@writetome51/not';


@Component({
	selector: 'click-execute-rapid-repeat-function',
	template: `
		<div class="click-execute-rapid-repeat-function"
		  (mousedown)="start($event)"
		  (mouseup)="stop()"
		  (touchstart)="start($event)"
		  (touchend)="stop()"
		  (dragstart)="stop()"
		>
			<ng-content></ng-content>
		</div>
	`
})
export class ClickExecuteRapidRepeatFunctionComponent implements OnInit {

	@Input() input: ClickExecuteRapidRepeatFunctionContext = {function: () => void 0};

	private __clickEnded = true;


	ngOnInit() {
		this.input = {
			initialDelayBeforeRapid: 500, // ms
			rapidDelay: 70, // ms
			...this.input
		};
	}


	start(event) {
		event.preventDefault();
		event.stopPropagation();

		if (not(this.__clickEnded)) return;
		this.__clickEnded = false;
		this.input.function();

		const outerInterval = setInterval(
			() => {
				const inner = setInterval(
					() => this.__actionToRepeat(inner), this.input.rapidDelay
				);
				clearInterval(outerInterval);
			},
			this.input.initialDelayBeforeRapid // only happens once
		);
	}


	stop() {
		this.__clickEnded = true;
	}


	private __actionToRepeat(interval) {
		if (not(this.__clickEnded)) this.input.function();
		else clearInterval(interval);
	}

}
