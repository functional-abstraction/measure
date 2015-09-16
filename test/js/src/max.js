
var itertools = require( "aureooms-js-itertools" ) ;
var range = itertools.range ;
var reduce = itertools.reduce ;
var map = itertools.map ;

test( "max" , function ( assert ) {

	var max = measure.Measures.MAX ;

	assert.equal( max.measure( 4 ) , 4 ) ;
	assert.equal( max.plus( max.zero( ) , max.measure( 4 ) ) , 4 ) ;
	assert.equal( max.plus( max.zero( ) , max.zero( ) , max.measure( 4 ) ) , 4 ) ;

	assert.equal( max.plus( max.measure( 1 ) , max.measure( 2 ) , max.measure( 3 ) ) , 3 ) ;
	assert.equal( max.plus( max.measure( 1 ) , max.measure( 3 ) , max.measure( 2 ) ) , 3 ) ;
	assert.equal( max.plus( max.measure( 3 ) , max.measure( 2 ) , max.measure( 1 ) ) , 3 ) ;

	var N = 1000 ;

	assert.equal( reduce( max.plus.bind( max ) , map( max.measure.bind( max ) , range( N ) ) , max.zero( ) ) , N - 1 ) ;

} ) ;
