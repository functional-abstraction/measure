
const Monoids = { } ;

Monoids.INTEGER_ADD = new IntegerAdd( ) ;
Monoids.INTEGER_MUL = new IntegerMul( ) ;
Monoids.INTEGER_MAX = new IntegerMax( ) ;
Monoids.KEY = new KeyMonoid( ) ;

exports.Monoids = Monoids ;
