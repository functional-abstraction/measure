
const Measures = { } ;

Measures.COUNTER = new Counter( ) ;
Measures.MAX = new Max( ) ;
Measures.KEY = new KeyMeasure( ) ;
Measures.INTERVAL = new Interval( ) ;

Measures.PRIO = Measures.MAX ;
Measures.SIZE = Measures.COUNTER ;

exports.Measures = Measures ;
