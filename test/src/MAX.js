import test from 'ava' ;

import { range , reduce , map } from "@aureooms/js-itertools" ;

import { Measures } from '../../src' ;

test( "max" , assert => {

	const max = Measures.MAX ;

	assert.is( max.measure( 4 ) , 4 ) ;
	assert.is( max.plus( max.zero( ) , max.measure( 4 ) ) , 4 ) ;
	assert.is( max.plus( max.zero( ) , max.zero( ) , max.measure( 4 ) ) , 4 ) ;

	assert.is( max.plus( max.measure( 1 ) , max.measure( 2 ) , max.measure( 3 ) ) , 3 ) ;
	assert.is( max.plus( max.measure( 1 ) , max.measure( 3 ) , max.measure( 2 ) ) , 3 ) ;
	assert.is( max.plus( max.measure( 3 ) , max.measure( 2 ) , max.measure( 1 ) ) , 3 ) ;

	const N = 1000 ;

	assert.is( reduce( max.plus.bind( max ) , map( max.measure.bind( max ) , range( N ) ) , max.zero( ) ) , N - 1 ) ;

} ) ;
