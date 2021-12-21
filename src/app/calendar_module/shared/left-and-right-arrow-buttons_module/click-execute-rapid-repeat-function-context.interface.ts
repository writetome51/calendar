export interface ClickExecuteRapidRepeatFunctionContext {

	function: () => void;

	initialDelayBeforeRapid?: number; // ms

	rapidDelay?: number; // ms

}
