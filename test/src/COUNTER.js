import test from 'ava' ;

import { range , reduce , map } from "aureooms-js-itertools" ;

import { Measures } from '../../src' ;

test( "counter" , assert => {

	const counter = Measures.COUNTER ;

	assert.is( counter.measure( "#" ) , 1 ) ;
	assert.is( counter.plus( counter.zero( ) , counter.measure( "#" ) ) , 1 ) ;
	assert.is( counter.plus( counter.zero( ) , counter.zero( ) , counter.measure( "#" ) ) , 1 ) ;

	assert.is( counter.plus( counter.measure( ) , counter.measure( "#" ) ) , 2 ) ;
	assert.is( counter.plus( counter.measure( ) , counter.measure( ) , counter.measure( "#" ) ) , 3 ) ;

	const N = 1000 ;

	assert.is( reduce( counter.plus.bind( counter ) , map( counter.measure.bind( counter ) , range( N ) ) , counter.zero( ) ) , N ) ;

} ) ;
