import test from 'ava' ;

import { range , reduce , map } from "aureooms-js-itertools" ;

import { Measures } from '../../src' ;

test( "key_len" , assert => {

	const key_len = Measures.KEY_LEN ;

	assert.deepEqual( key_len.measure( 4 ) , [ 4 , 1 ] ) ;
	assert.deepEqual( key_len.plus( key_len.zero( ) , key_len.measure( 4 ) ) , [ 4 , 1 ] ) ;
	assert.deepEqual( key_len.plus( key_len.measure( 4 ) , key_len.zero( ) ) , [ 4 , 1 ] ) ;
	assert.deepEqual( key_len.plus( key_len.zero( ) , key_len.zero( ) , key_len.measure( 4 ) ) , [ 4 , 1 ] ) ;
	assert.deepEqual( key_len.plus( key_len.zero( ) , key_len.measure( 4 ) , key_len.zero( ) ) , [ 4 , 1 ] ) ;
	assert.deepEqual( key_len.plus( key_len.measure( 4 ) , key_len.zero( ) , key_len.zero( ) ) , [ 4 , 1 ] ) ;

	assert.deepEqual( key_len.plus( key_len.measure( 1 ) , key_len.measure( 2 ) , key_len.measure( 3 ) ) , [ 3 , 3 ] ) ;
	assert.deepEqual( key_len.plus( key_len.measure( 1 ) , key_len.measure( 3 ) , key_len.measure( 2 ) ) , [ 2 , 3 ] ) ;
	assert.deepEqual( key_len.plus( key_len.measure( 3 ) , key_len.measure( 2 ) , key_len.measure( 1 ) ) , [ 1 , 3 ] ) ;

	const N = 1000 ;

	assert.deepEqual( reduce( key_len.plus.bind( key_len ) , map( key_len.measure.bind( key_len ) , range( N ) ) , key_len.zero( ) ) , [ N - 1 , N ] ) ;

} ) ;
