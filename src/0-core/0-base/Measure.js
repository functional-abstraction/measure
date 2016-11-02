export class Measure {

	constructor ( monoid ) {
		this.monoid = monoid ;
	}

	zero ( ) {
		return this.monoid.zero( ) ;
	}

	plus ( a , b , c = undefined ) {

		if ( c === undefined ) return this.monoid.plus( a , b ) ;

		return this.monoid.plus( a , this.monoid.plus( b , c ) ) ;

	}

	measure ( element ) {
		throw new Error( "measure : not implemented" ) ;
	}

}
