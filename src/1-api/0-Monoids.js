import {
	IntegerAdd ,
	IntegerMul ,
	IntegerMax ,
	KeyMonoid ,
	product
} from "../0-core/index.js" ;

const INTEGER_ADD = new IntegerAdd( ) ;
const INTEGER_MUL = new IntegerMul( ) ;
const INTEGER_MAX = new IntegerMax( ) ;
const KEY = new KeyMonoid( ) ;
const KEY_MAX = product( KEY , INTEGER_MAX ) ;
const KEY_ADD = product( KEY , INTEGER_ADD ) ;

export const Monoids = {
	INTEGER_ADD ,
	INTEGER_MUL ,
	INTEGER_MAX ,
	KEY ,
	KEY_MAX ,
	KEY_ADD
} ;
