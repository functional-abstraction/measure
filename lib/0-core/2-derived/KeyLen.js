'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.KeyLen = undefined;

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

var KeyLen = exports.KeyLen = function (_Measure) {
	(0, _inherits3.default)(KeyLen, _Measure);

	function KeyLen() {
		(0, _classCallCheck3.default)(this, KeyLen);
		return (0, _possibleConstructorReturn3.default)(this, (KeyLen.__proto__ || (0, _getPrototypeOf2.default)(KeyLen)).call(this, _Monoids.Monoids.KEY_ADD));
	}

	(0, _createClass3.default)(KeyLen, [{
		key: 'measure',
		value: function measure(element) {
			return [element, 1];
		}
	}]);
	return KeyLen;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL0tleUxlbi5qcyJdLCJuYW1lcyI6WyJLZXlMZW4iLCJLRVlfQUREIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFFYUEsTSxXQUFBQSxNOzs7QUFFWixtQkFBZ0I7QUFBQTtBQUFBLCtIQUNSLGlCQUFRQyxPQURBO0FBRWY7Ozs7MEJBRVNDLE8sRUFBVTtBQUNuQixVQUFPLENBQUVBLE9BQUYsRUFBWSxDQUFaLENBQVA7QUFDQSIsImZpbGUiOiJLZXlMZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZWFzdXJlIH0gZnJvbSAnLi4vMC1iYXNlJyA7XG5pbXBvcnQgeyBNb25vaWRzIH0gZnJvbSAnLi4vLi4vMS1hcGkvMC1Nb25vaWRzJyA7XG5cbmV4cG9ydCBjbGFzcyBLZXlMZW4gZXh0ZW5kcyBNZWFzdXJlIHtcblxuXHRjb25zdHJ1Y3RvciAoICkge1xuXHRcdHN1cGVyKCBNb25vaWRzLktFWV9BREQgKSA7XG5cdH1cblxuXHRtZWFzdXJlICggZWxlbWVudCApIHtcblx0XHRyZXR1cm4gWyBlbGVtZW50ICwgMSBdIDtcblx0fVxuXG59XG4iXX0=