
class Counter extends Measure {

	constructor ( ) {
		super( Monoids.INTEGER_ADD ) ;
	}

	measure ( element ) {
		return 1 ;
	}

}
