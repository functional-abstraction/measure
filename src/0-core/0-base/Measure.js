/**
 * Abstract Measure class.
 */
export class Measure {
	/**
	 * Constructor, stores the monoid.
	 */
	constructor(monoid) {
		this.monoid = monoid;
	}

	/**
	 * Returns the zero measure according to the monoid.
	 */
	zero() {
		return this.monoid.zero();
	}

	/**
	 * Adds measures together using monoid#plus.
	 */
	plus(a, b, c = undefined) {
		if (c === undefined) return this.monoid.plus(a, b);

		return this.monoid.plus(a, this.monoid.plus(b, c));
	}

	/**
	 * Returns the measure of an element. Must be implemented by classes
	 * extending Measure
	 */
	measure(_element) {
		throw new Error('measure : not implemented');
	}
}
