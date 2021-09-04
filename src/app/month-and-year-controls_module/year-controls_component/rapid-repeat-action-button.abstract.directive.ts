export abstract class RapidRepeatActionButtonDirective {

	protected _initialDelayBeforeRapid = 500; // ms
	protected _rapidDelay = 70; // ms
	private __actionEnded = true;


	protected abstract _singleAction(): void


	startActionOnBegin() {
		if (!(this.__actionEnded)) return;
		this.__actionEnded = false;
		this._singleAction();

		const outerInterval = setInterval(
			() => {
				const inner = setInterval(() => this.__actionToRepeat(inner), this._rapidDelay);
				clearInterval(outerInterval);
			},
			this._initialDelayBeforeRapid // only happens once
		);
	}


	stopActionOnEnd() {
		this.__actionEnded = true;
	}


	private __actionToRepeat(interval) {
		if (!(this.__actionEnded)) this._singleAction();
		else clearInterval(interval);
	}

}
