export abstract class RapidRepeatActionButtonComponent {

	protected _initialDelayBeforeRapid = 500; // ms
	protected _rapidDelay = 70; // ms
	private __clickEnded = true;


	protected abstract _singleAction(): void


	actionOnMousedown() {
		this.__clickEnded = false;
		this._singleAction();

		let outer = setInterval(
			() => {
				let inner = setInterval(
					() => {
						if (!(this.__clickEnded)) this._singleAction();
						else clearInterval(inner);
					},
					this._rapidDelay
				);
				clearInterval(outer);
			},
			this._initialDelayBeforeRapid
		);
	}


	stopRapidActionOnMouseup() {
		this.__clickEnded = true;
	}

}
