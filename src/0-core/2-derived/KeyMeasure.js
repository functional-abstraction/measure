import { Measure } from '../0-base' ;
import { Monoids } from '../../1-api/0-Monoids' ;

export class KeyMeasure extends Measure {

	constructor ( ) {
		super( Monoids.KEY ) ;
	}

	measure ( element ) {
		return element ;
	}

}
