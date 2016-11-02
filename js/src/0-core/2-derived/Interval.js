
class Interval extends Measure {

	constructor ( ) {
		super( Monoids.KEY_MAX ) ;
	}

	measure ( element ) {
		return element ;
	}

}
