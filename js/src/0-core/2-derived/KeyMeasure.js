
class KeyMeasure extends Measure {

	constructor ( ) {
		super( Monoids.KEY ) ;
	}

	measure ( element ) {
		return element ;
	}

}
