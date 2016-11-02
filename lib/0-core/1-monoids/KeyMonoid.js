"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NoKey = exports.NoKey = {};

var KeyMonoid = exports.KeyMonoid = function () {
	function KeyMonoid() {
		_classCallCheck(this, KeyMonoid);
	}

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
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMS1tb25vaWRzL0tleU1vbm9pZC5qcyJdLCJuYW1lcyI6WyJOb0tleSIsIktleU1vbm9pZCIsImEiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ08sSUFBTUEsd0JBQVEsRUFBZDs7SUFFTUMsUyxXQUFBQSxTOzs7Ozs7O3lCQUVIO0FBQ1IsVUFBT0QsS0FBUDtBQUNBOzs7dUJBRU1FLEMsRUFBSUMsQyxFQUFJO0FBQ2QsVUFBU0EsTUFBTUgsS0FBUixHQUFrQkUsQ0FBbEIsR0FBc0JDLENBQTdCO0FBQ0EiLCJmaWxlIjoiS2V5TW9ub2lkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgTm9LZXkgPSB7IH0gO1xuXG5leHBvcnQgY2xhc3MgS2V5TW9ub2lkIHtcblxuXHR6ZXJvICggKSB7XG5cdFx0cmV0dXJuIE5vS2V5IDtcblx0fVxuXG5cdHBsdXMgKCBhICwgYiApIHtcblx0XHRyZXR1cm4gKCBiID09PSBOb0tleSApID8gYSA6IGIgO1xuXHR9XG5cbn1cbiJdfQ==