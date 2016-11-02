"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Measure = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Measure = exports.Measure = function () {
	function Measure(monoid) {
		(0, _classCallCheck3.default)(this, Measure);

		this.monoid = monoid;
	}

	(0, _createClass3.default)(Measure, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMC1iYXNlL01lYXN1cmUuanMiXSwibmFtZXMiOlsiTWVhc3VyZSIsIm1vbm9pZCIsInplcm8iLCJhIiwiYiIsImMiLCJ1bmRlZmluZWQiLCJwbHVzIiwiZWxlbWVudCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxPLFdBQUFBLE87QUFFWixrQkFBY0MsTUFBZCxFQUF1QjtBQUFBOztBQUN0QixPQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQTs7Ozt5QkFFUTtBQUNSLFVBQU8sS0FBS0EsTUFBTCxDQUFZQyxJQUFaLEVBQVA7QUFDQTs7O3VCQUVNQyxDLEVBQUlDLEMsRUFBb0I7QUFBQSxPQUFoQkMsQ0FBZ0IsdUVBQVpDLFNBQVk7OztBQUU5QixPQUFLRCxNQUFNQyxTQUFYLEVBQXVCLE9BQU8sS0FBS0wsTUFBTCxDQUFZTSxJQUFaLENBQWtCSixDQUFsQixFQUFzQkMsQ0FBdEIsQ0FBUDs7QUFFdkIsVUFBTyxLQUFLSCxNQUFMLENBQVlNLElBQVosQ0FBa0JKLENBQWxCLEVBQXNCLEtBQUtGLE1BQUwsQ0FBWU0sSUFBWixDQUFrQkgsQ0FBbEIsRUFBc0JDLENBQXRCLENBQXRCLENBQVA7QUFFQTs7OzBCQUVTRyxPLEVBQVU7QUFDbkIsU0FBTSxJQUFJQyxLQUFKLENBQVcsMkJBQVgsQ0FBTjtBQUNBIiwiZmlsZSI6Ik1lYXN1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWVhc3VyZSB7XG5cblx0Y29uc3RydWN0b3IgKCBtb25vaWQgKSB7XG5cdFx0dGhpcy5tb25vaWQgPSBtb25vaWQgO1xuXHR9XG5cblx0emVybyAoICkge1xuXHRcdHJldHVybiB0aGlzLm1vbm9pZC56ZXJvKCApIDtcblx0fVxuXG5cdHBsdXMgKCBhICwgYiAsIGMgPSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiAoIGMgPT09IHVuZGVmaW5lZCApIHJldHVybiB0aGlzLm1vbm9pZC5wbHVzKCBhICwgYiApIDtcblxuXHRcdHJldHVybiB0aGlzLm1vbm9pZC5wbHVzKCBhICwgdGhpcy5tb25vaWQucGx1cyggYiAsIGMgKSApIDtcblxuXHR9XG5cblx0bWVhc3VyZSAoIGVsZW1lbnQgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIm1lYXN1cmUgOiBub3QgaW1wbGVtZW50ZWRcIiApIDtcblx0fVxuXG59XG4iXX0=