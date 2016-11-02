"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.KeyMonoid = exports.NoKey = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoKey = exports.NoKey = {};

var KeyMonoid = exports.KeyMonoid = function () {
	function KeyMonoid() {
		(0, _classCallCheck3.default)(this, KeyMonoid);
	}

	(0, _createClass3.default)(KeyMonoid, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMS1tb25vaWRzL0tleU1vbm9pZC5qcyJdLCJuYW1lcyI6WyJOb0tleSIsIktleU1vbm9pZCIsImEiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNPLElBQU1BLHdCQUFRLEVBQWQ7O0lBRU1DLFMsV0FBQUEsUzs7Ozs7Ozt5QkFFSDtBQUNSLFVBQU9ELEtBQVA7QUFDQTs7O3VCQUVNRSxDLEVBQUlDLEMsRUFBSTtBQUNkLFVBQVNBLE1BQU1ILEtBQVIsR0FBa0JFLENBQWxCLEdBQXNCQyxDQUE3QjtBQUNBIiwiZmlsZSI6IktleU1vbm9pZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IE5vS2V5ID0geyB9IDtcblxuZXhwb3J0IGNsYXNzIEtleU1vbm9pZCB7XG5cblx0emVybyAoICkge1xuXHRcdHJldHVybiBOb0tleSA7XG5cdH1cblxuXHRwbHVzICggYSAsIGIgKSB7XG5cdFx0cmV0dXJuICggYiA9PT0gTm9LZXkgKSA/IGEgOiBiIDtcblx0fVxuXG59XG4iXX0=