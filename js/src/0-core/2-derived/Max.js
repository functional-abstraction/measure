
class Max extends Measure {

	constructor ( ) {
		super( Monoids.INTEGER_MAX ) ;
	}

	measure ( element ) {
		return element ;
	}

}
