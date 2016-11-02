"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Abstract Measure class.
 */
var Measure = exports.Measure = function () {

	/**
  * Constructor, stores the monoid.
  */
	function Measure(monoid) {
		_classCallCheck(this, Measure);

		this.monoid = monoid;
	}

	/**
  * Returns the zero measure according to the monoid.
  */


	_createClass(Measure, [{
		key: "zero",
		value: function zero() {
			return this.monoid.zero();
		}

		/**
   * Adds measures together using monoid#plus.
   */

	}, {
		key: "plus",
		value: function plus(a, b) {
			var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;


			if (c === undefined) return this.monoid.plus(a, b);

			return this.monoid.plus(a, this.monoid.plus(b, c));
		}

		/**
   * Returns the measure of an element. Must be implemented by classes
   * extending Measure
   */

	}, {
		key: "measure",
		value: function measure(element) {
			throw new Error("measure : not implemented");
		}
	}]);

	return Measure;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMC1iYXNlL01lYXN1cmUuanMiXSwibmFtZXMiOlsiTWVhc3VyZSIsIm1vbm9pZCIsInplcm8iLCJhIiwiYiIsImMiLCJ1bmRlZmluZWQiLCJwbHVzIiwiZWxlbWVudCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztJQUdhQSxPLFdBQUFBLE87O0FBRVo7OztBQUdBLGtCQUFjQyxNQUFkLEVBQXVCO0FBQUE7O0FBQ3RCLE9BQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBOztBQUVEOzs7Ozs7O3lCQUdTO0FBQ1IsVUFBTyxLQUFLQSxNQUFMLENBQVlDLElBQVosRUFBUDtBQUNBOztBQUVEOzs7Ozs7dUJBR09DLEMsRUFBSUMsQyxFQUFvQjtBQUFBLE9BQWhCQyxDQUFnQix1RUFBWkMsU0FBWTs7O0FBRTlCLE9BQUtELE1BQU1DLFNBQVgsRUFBdUIsT0FBTyxLQUFLTCxNQUFMLENBQVlNLElBQVosQ0FBa0JKLENBQWxCLEVBQXNCQyxDQUF0QixDQUFQOztBQUV2QixVQUFPLEtBQUtILE1BQUwsQ0FBWU0sSUFBWixDQUFrQkosQ0FBbEIsRUFBc0IsS0FBS0YsTUFBTCxDQUFZTSxJQUFaLENBQWtCSCxDQUFsQixFQUFzQkMsQ0FBdEIsQ0FBdEIsQ0FBUDtBQUVBOztBQUVEOzs7Ozs7OzBCQUlVRyxPLEVBQVU7QUFDbkIsU0FBTSxJQUFJQyxLQUFKLENBQVcsMkJBQVgsQ0FBTjtBQUNBIiwiZmlsZSI6Ik1lYXN1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFic3RyYWN0IE1lYXN1cmUgY2xhc3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBNZWFzdXJlIHtcblxuXHQvKipcblx0ICogQ29uc3RydWN0b3IsIHN0b3JlcyB0aGUgbW9ub2lkLlxuXHQgKi9cblx0Y29uc3RydWN0b3IgKCBtb25vaWQgKSB7XG5cdFx0dGhpcy5tb25vaWQgPSBtb25vaWQgO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHplcm8gbWVhc3VyZSBhY2NvcmRpbmcgdG8gdGhlIG1vbm9pZC5cblx0ICovXG5cdHplcm8gKCApIHtcblx0XHRyZXR1cm4gdGhpcy5tb25vaWQuemVybyggKSA7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBtZWFzdXJlcyB0b2dldGhlciB1c2luZyBtb25vaWQjcGx1cy5cblx0ICovXG5cdHBsdXMgKCBhICwgYiAsIGMgPSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiAoIGMgPT09IHVuZGVmaW5lZCApIHJldHVybiB0aGlzLm1vbm9pZC5wbHVzKCBhICwgYiApIDtcblxuXHRcdHJldHVybiB0aGlzLm1vbm9pZC5wbHVzKCBhICwgdGhpcy5tb25vaWQucGx1cyggYiAsIGMgKSApIDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIG1lYXN1cmUgb2YgYW4gZWxlbWVudC4gTXVzdCBiZSBpbXBsZW1lbnRlZCBieSBjbGFzc2VzXG5cdCAqIGV4dGVuZGluZyBNZWFzdXJlXG5cdCAqL1xuXHRtZWFzdXJlICggZWxlbWVudCApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibWVhc3VyZSA6IG5vdCBpbXBsZW1lbnRlZFwiICkgO1xuXHR9XG5cbn1cbiJdfQ==