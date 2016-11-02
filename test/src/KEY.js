import test from 'ava' ;

import { range , reduce , map } from "aureooms-js-itertools" ;

import { Measures } from '../../src' ;

test( "key" , assert => {

	const key = Measures.KEY ;

	assert.is( key.measure( 4 ) , 4 ) ;
	assert.is( key.plus( key.zero( ) , key.measure( 4 ) ) , 4 ) ;
	assert.is( key.plus( key.measure( 4 ) , key.zero( ) ) , 4 ) ;
	assert.is( key.plus( key.zero( ) , key.zero( ) , key.measure( 4 ) ) , 4 ) ;
	assert.is( key.plus( key.zero( ) , key.measure( 4 ) , key.zero( ) ) , 4 ) ;
	assert.is( key.plus( key.measure( 4 ) , key.zero( ) , key.zero( ) ) , 4 ) ;

	assert.is( key.plus( key.measure( 1 ) , key.measure( 2 ) , key.measure( 3 ) ) , 3 ) ;
	assert.is( key.plus( key.measure( 1 ) , key.measure( 3 ) , key.measure( 2 ) ) , 2 ) ;
	assert.is( key.plus( key.measure( 3 ) , key.measure( 2 ) , key.measure( 1 ) ) , 1 ) ;

	const N = 1000 ;

	assert.is( reduce( key.plus.bind( key ) , map( key.measure.bind( key ) , range( N ) ) , key.zero( ) ) , N - 1 ) ;

} ) ;
