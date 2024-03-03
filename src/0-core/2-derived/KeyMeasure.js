import {Monoids} from '../../1-api/0-Monoids.js';
import {Measure} from '../0-base/index.js';

export class KeyMeasure extends Measure {
	constructor() {
		super(Monoids.KEY);
	}

	measure(element) {
		return element;
	}
}
