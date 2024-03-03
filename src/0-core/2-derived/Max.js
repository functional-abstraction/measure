import {Monoids} from '../../1-api/0-Monoids.js';
import {Measure} from '../0-base/index.js';

export class Max extends Measure {
	constructor() {
		super(Monoids.INTEGER_MAX);
	}

	measure(element) {
		return element;
	}
}
