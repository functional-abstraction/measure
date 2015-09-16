"use strict";

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/0-core */
		/* js/src/0-core/0-base */
		/* js/src/0-core/0-base/Measure.js */

		var Measure = (function () {
			function Measure(monoid) {
				_classCallCheck(this, Measure);

				this.monoid = monoid;
			}

			/* js/src/0-core/1-monoids */
			/* js/src/0-core/1-monoids/IntegerAdd.js */

			_createClass(Measure, [{
				key: "zero",
				value: function zero() {
					return this.monoid.zero();
				}
			}, {
				key: "plus",
				value: function plus(a, b) {
					var c = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];

					if (c === undefined) return this.monoid.plus(a, b);

					return this.monoid.plus(a, this.monoid.plus(b, c));
				}
			}, {
				key: "measure",
				value: function measure(element) {
					throw new Error("measure : not implemented");
				}
			}]);

			return Measure;
		})();

		var IntegerAdd = (function () {
			function IntegerAdd() {
				_classCallCheck(this, IntegerAdd);
			}

			/* js/src/0-core/1-monoids/IntegerMax.js */

			_createClass(IntegerAdd, [{
				key: "zero",
				value: function zero() {
					return 0;
				}
			}, {
				key: "plus",
				value: function plus(a, b) {
					return a + b;
				}
			}]);

			return IntegerAdd;
		})();

		var IntegerMax = (function () {
			function IntegerMax() {
				_classCallCheck(this, IntegerMax);
			}

			/* js/src/0-core/1-monoids/IntegerMul.js */

			_createClass(IntegerMax, [{
				key: "zero",
				value: function zero() {
					return -Infinity;
				}
			}, {
				key: "plus",
				value: function plus(a, b) {
					return Math.max(a, b);
				}
			}]);

			return IntegerMax;
		})();

		var IntegerMul = (function () {
			function IntegerMul() {
				_classCallCheck(this, IntegerMul);
			}

			/* js/src/0-core/1-monoids/KeyMonoid.js */

			_createClass(IntegerMul, [{
				key: "zero",
				value: function zero() {
					return 1;
				}
			}, {
				key: "plus",
				value: function plus(a, b) {
					return a * b;
				}
			}]);

			return IntegerMul;
		})();

		var NoKey = {};

		var KeyMonoid = (function () {
			function KeyMonoid() {
				_classCallCheck(this, KeyMonoid);
			}

			/* js/src/0-core/2-derived */
			/* js/src/0-core/2-derived/Counter.js */

			_createClass(KeyMonoid, [{
				key: "zero",
				value: function zero() {
					return NoKey;
				}
			}, {
				key: "plus",
				value: function plus(a, b) {
					return b === NoKey ? a : b;
				}
			}]);

			return KeyMonoid;
		})();

		var Counter = (function (_Measure) {
			_inherits(Counter, _Measure);

			function Counter() {
				_classCallCheck(this, Counter);

				_get(Object.getPrototypeOf(Counter.prototype), "constructor", this).call(this, Monoids.INTEGER_ADD);
			}

			/* js/src/0-core/2-derived/KeyMeasure.js */

			_createClass(Counter, [{
				key: "measure",
				value: function measure(element) {
					return 1;
				}
			}]);

			return Counter;
		})(Measure);

		var KeyMeasure = (function (_Measure2) {
			_inherits(KeyMeasure, _Measure2);

			function KeyMeasure() {
				_classCallCheck(this, KeyMeasure);

				_get(Object.getPrototypeOf(KeyMeasure.prototype), "constructor", this).call(this, Monoids.KEY);
			}

			/* js/src/0-core/2-derived/Max.js */

			_createClass(KeyMeasure, [{
				key: "measure",
				value: function measure(element) {
					return element;
				}
			}]);

			return KeyMeasure;
		})(Measure);

		var Max = (function (_Measure3) {
			_inherits(Max, _Measure3);

			function Max() {
				_classCallCheck(this, Max);

				_get(Object.getPrototypeOf(Max.prototype), "constructor", this).call(this, Monoids.INTEGER_MAX);
			}

			/* js/src/1-api */
			/* js/src/1-api/0-Monoids.js */

			_createClass(Max, [{
				key: "measure",
				value: function measure(element) {
					return element;
				}
			}]);

			return Max;
		})(Measure);

		var Monoids = {};

		Monoids.INTEGER_ADD = new IntegerAdd();
		Monoids.INTEGER_MUL = new IntegerMul();
		Monoids.INTEGER_MAX = new IntegerMax();
		Monoids.KEY = new KeyMonoid();

		exports.Monoids = Monoids;

		/* js/src/1-api/1-Measures.js */

		var Measures = {};

		Measures.COUNTER = new Counter();
		Measures.MAX = new Max();
		Measures.KEY = new KeyMeasure();

		exports.Measures = Measures;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-measure", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["measure"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-measure");
})();