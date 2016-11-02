export class Product {

	constructor ( a , b ) {
		this.a = a ;
		this.b = b ;
	}

	zero ( ) {
		return [ this.a.zero( ) , this.b.zero( ) ] ;
	}

	/**
	 * @param first
	 * @param second
	 */
	plus ( [ a , b ] , [ A , B ] ) {
		return [ this.a.plus( a , A ) , this.b.plus( b , B ) ] ;
	}

}

export function product ( a , b ) {
	return new Product( a , b ) ;
}
