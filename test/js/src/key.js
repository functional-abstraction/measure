
var itertools = require( "aureooms-js-itertools" ) ;
var range = itertools.range ;
var reduce = itertools.reduce ;
var map = itertools.map ;

test( "key" , function ( assert ) {

	var key = measure.Measures.KEY ;

	assert.equal( key.measure( 4 ) , 4 ) ;
	assert.equal( key.plus( key.zero( ) , key.measure( 4 ) ) , 4 ) ;
	assert.equal( key.plus( key.measure( 4 ) , key.zero( ) ) , 4 ) ;
	assert.equal( key.plus( key.zero( ) , key.zero( ) , key.measure( 4 ) ) , 4 ) ;
	assert.equal( key.plus( key.zero( ) , key.measure( 4 ) , key.zero( ) ) , 4 ) ;
	assert.equal( key.plus( key.measure( 4 ) , key.zero( ) , key.zero( ) ) , 4 ) ;

	assert.equal( key.plus( key.measure( 1 ) , key.measure( 2 ) , key.measure( 3 ) ) , 3 ) ;
	assert.equal( key.plus( key.measure( 1 ) , key.measure( 3 ) , key.measure( 2 ) ) , 2 ) ;
	assert.equal( key.plus( key.measure( 3 ) , key.measure( 2 ) , key.measure( 1 ) ) , 1 ) ;

	var N = 1000 ;

	assert.equal( reduce( key.plus.bind( key ) , map( key.measure.bind( key ) , range( N ) ) , key.zero( ) ) , N - 1 ) ;

} ) ;
