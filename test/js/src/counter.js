
var itertools = require( "aureooms-js-itertools" ) ;
var range = itertools.range ;
var reduce = itertools.reduce ;
var map = itertools.map ;

test( "counter" , function ( assert ) {

	var counter = measure.Measures.COUNTER ;

	assert.equal( counter.measure( "#" ) , 1 ) ;
	assert.equal( counter.plus( counter.zero( ) , counter.measure( "#" ) ) , 1 ) ;
	assert.equal( counter.plus( counter.zero( ) , counter.zero( ) , counter.measure( "#" ) ) , 1 ) ;

	assert.equal( counter.plus( counter.measure( ) , counter.measure( "#" ) ) , 2 ) ;
	assert.equal( counter.plus( counter.measure( ) , counter.measure( ) , counter.measure( "#" ) ) , 3 ) ;

	var N = 1000 ;

	assert.equal( reduce( counter.plus.bind( counter ) , map( counter.measure.bind( counter ) , range( N ) ) , counter.zero( ) ) , N ) ;

} ) ;
