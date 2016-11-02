import { Measure } from '../0-base' ;
import { Monoids } from '../../1-api/0-Monoids' ;

export class Counter extends Measure {

	constructor ( ) {
		super( Monoids.INTEGER_ADD ) ;
	}

	measure ( element ) {
		return 1 ;
	}

}
