import { Measure } from '../0-base' ;
import { Monoids } from '../../1-api' ;

export class KeyLen extends Measure {

	constructor ( ) {
		super( Monoids.KEY_ADD ) ;
	}

	measure ( element ) {
		return [ element , 1 ] ;
	}

}
