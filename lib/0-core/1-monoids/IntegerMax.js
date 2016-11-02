"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IntegerMax = exports.IntegerMax = function () {
	function IntegerMax() {
		_classCallCheck(this, IntegerMax);
	}

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
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMS1tb25vaWRzL0ludGVnZXJNYXguanMiXSwibmFtZXMiOlsiSW50ZWdlck1heCIsIkluZmluaXR5IiwiYSIsImIiLCJNYXRoIiwibWF4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ2FBLFUsV0FBQUEsVTs7Ozs7Ozt5QkFFSDtBQUNSLFVBQU8sQ0FBQ0MsUUFBUjtBQUNBOzs7dUJBRU1DLEMsRUFBSUMsQyxFQUFJO0FBQ2QsVUFBT0MsS0FBS0MsR0FBTCxDQUFVSCxDQUFWLEVBQWNDLENBQWQsQ0FBUDtBQUNBIiwiZmlsZSI6IkludGVnZXJNYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBJbnRlZ2VyTWF4IHtcblxuXHR6ZXJvICggKSB7XG5cdFx0cmV0dXJuIC1JbmZpbml0eSA7XG5cdH1cblxuXHRwbHVzICggYSAsIGIgKSB7XG5cdFx0cmV0dXJuIE1hdGgubWF4KCBhICwgYiApIDtcblx0fVxuXG59XG4iXX0=