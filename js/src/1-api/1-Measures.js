
const Measures = { } ;

Measures.COUNTER = new Counter( ) ;
Measures.MAX = new Max( ) ;
Measures.KEY = new KeyMeasure( ) ;
Measures.KEY_LEN = new KeyLen( ) ;
Measures.INTERVAL = new Interval( ) ;

Measures.PRIO = Measures.MAX ;
Measures.SIZE = Measures.COUNTER ;
Measures.LEN = Measures.COUNTER ;

exports.Measures = Measures ;
