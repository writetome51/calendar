export abstract class ImplementationContainer<T> {

	protected _implementation: T | undefined;


	setImplementation(implementation: T) {
		this._implementation = implementation;
	}

}
