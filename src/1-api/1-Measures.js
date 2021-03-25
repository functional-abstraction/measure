import {
	Counter ,
	Max ,
	KeyMeasure ,
	KeyLen ,
	Interval
} from "../0-core/index.js" ;

const COUNTER = new Counter( ) ;
const MAX = new Max( ) ;
const KEY = new KeyMeasure( ) ;
const KEY_LEN = new KeyLen( ) ;
const INTERVAL = new Interval( ) ;

export const Measures = {
	COUNTER ,
	MAX ,
	KEY ,
	KEY_LEN ,
	INTERVAL ,
	PRIO : MAX ,
	SIZE : COUNTER ,
	LEN : COUNTER
}
