
class KeyLen extends Measure {

	constructor ( ) {
		super( Monoids.KEY_ADD ) ;
	}

	measure ( element ) {
		return [ element , 1 ] ;
	}

}
