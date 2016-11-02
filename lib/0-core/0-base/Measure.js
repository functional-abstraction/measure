"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Measure = exports.Measure = function () {
	function Measure(monoid) {
		_classCallCheck(this, Measure);

		this.monoid = monoid;
	}

	_createClass(Measure, [{
		key: "zero",
		value: function zero() {
			return this.monoid.zero();
		}
	}, {
		key: "plus",
		value: function plus(a, b) {
			var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;


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
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMC1iYXNlL01lYXN1cmUuanMiXSwibmFtZXMiOlsiTWVhc3VyZSIsIm1vbm9pZCIsInplcm8iLCJhIiwiYiIsImMiLCJ1bmRlZmluZWQiLCJwbHVzIiwiZWxlbWVudCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQWFBLE8sV0FBQUEsTztBQUVaLGtCQUFjQyxNQUFkLEVBQXVCO0FBQUE7O0FBQ3RCLE9BQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBOzs7O3lCQUVRO0FBQ1IsVUFBTyxLQUFLQSxNQUFMLENBQVlDLElBQVosRUFBUDtBQUNBOzs7dUJBRU1DLEMsRUFBSUMsQyxFQUFvQjtBQUFBLE9BQWhCQyxDQUFnQix1RUFBWkMsU0FBWTs7O0FBRTlCLE9BQUtELE1BQU1DLFNBQVgsRUFBdUIsT0FBTyxLQUFLTCxNQUFMLENBQVlNLElBQVosQ0FBa0JKLENBQWxCLEVBQXNCQyxDQUF0QixDQUFQOztBQUV2QixVQUFPLEtBQUtILE1BQUwsQ0FBWU0sSUFBWixDQUFrQkosQ0FBbEIsRUFBc0IsS0FBS0YsTUFBTCxDQUFZTSxJQUFaLENBQWtCSCxDQUFsQixFQUFzQkMsQ0FBdEIsQ0FBdEIsQ0FBUDtBQUVBOzs7MEJBRVNHLE8sRUFBVTtBQUNuQixTQUFNLElBQUlDLEtBQUosQ0FBVywyQkFBWCxDQUFOO0FBQ0EiLCJmaWxlIjoiTWVhc3VyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZWFzdXJlIHtcblxuXHRjb25zdHJ1Y3RvciAoIG1vbm9pZCApIHtcblx0XHR0aGlzLm1vbm9pZCA9IG1vbm9pZCA7XG5cdH1cblxuXHR6ZXJvICggKSB7XG5cdFx0cmV0dXJuIHRoaXMubW9ub2lkLnplcm8oICkgO1xuXHR9XG5cblx0cGx1cyAoIGEgLCBiICwgYyA9IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmICggYyA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIHRoaXMubW9ub2lkLnBsdXMoIGEgLCBiICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMubW9ub2lkLnBsdXMoIGEgLCB0aGlzLm1vbm9pZC5wbHVzKCBiICwgYyApICkgO1xuXG5cdH1cblxuXHRtZWFzdXJlICggZWxlbWVudCApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibWVhc3VyZSA6IG5vdCBpbXBsZW1lbnRlZFwiICkgO1xuXHR9XG5cbn1cbiJdfQ==