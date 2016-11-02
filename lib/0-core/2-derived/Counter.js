'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Counter = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('../0-base');

var _Monoids = require('../../1-api/0-Monoids');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Counter = exports.Counter = function (_Measure) {
	(0, _inherits3.default)(Counter, _Measure);

	function Counter() {
		(0, _classCallCheck3.default)(this, Counter);
		return (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).call(this, _Monoids.Monoids.INTEGER_ADD));
	}

	(0, _createClass3.default)(Counter, [{
		key: 'measure',
		value: function measure(element) {
			return 1;
		}
	}]);
	return Counter;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL0NvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsIklOVEVHRVJfQUREIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFFYUEsTyxXQUFBQSxPOzs7QUFFWixvQkFBZ0I7QUFBQTtBQUFBLGlJQUNSLGlCQUFRQyxXQURBO0FBRWY7Ozs7MEJBRVNDLE8sRUFBVTtBQUNuQixVQUFPLENBQVA7QUFDQSIsImZpbGUiOiJDb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVhc3VyZSB9IGZyb20gJy4uLzAtYmFzZScgO1xuaW1wb3J0IHsgTW9ub2lkcyB9IGZyb20gJy4uLy4uLzEtYXBpLzAtTW9ub2lkcycgO1xuXG5leHBvcnQgY2xhc3MgQ291bnRlciBleHRlbmRzIE1lYXN1cmUge1xuXG5cdGNvbnN0cnVjdG9yICggKSB7XG5cdFx0c3VwZXIoIE1vbm9pZHMuSU5URUdFUl9BREQgKSA7XG5cdH1cblxuXHRtZWFzdXJlICggZWxlbWVudCApIHtcblx0XHRyZXR1cm4gMSA7XG5cdH1cblxufVxuIl19