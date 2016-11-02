
const Monoids = { } ;

Monoids.INTEGER_ADD = new IntegerAdd( ) ;
Monoids.INTEGER_MUL = new IntegerMul( ) ;
Monoids.INTEGER_MAX = new IntegerMax( ) ;
Monoids.KEY = new KeyMonoid( ) ;
Monoids.KEY_MAX = product( Monoids.KEY , Monoids.INTEGER_MAX ) ;
Monoids.KEY_ADD = product( Monoids.KEY , Monoids.INTEGER_ADD ) ;

exports.Monoids = Monoids ;
