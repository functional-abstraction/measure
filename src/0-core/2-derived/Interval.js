import {Monoids} from '../../1-api/0-Monoids.js';
import {Measure} from '../0-base/index.js';

export class Interval extends Measure {
	constructor() {
		super(Monoids.KEY_MAX);
	}

	measure(element) {
		return element;
	}
}
