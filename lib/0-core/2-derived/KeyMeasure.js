'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.KeyMeasure = undefined;

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

var KeyMeasure = exports.KeyMeasure = function (_Measure) {
	(0, _inherits3.default)(KeyMeasure, _Measure);

	function KeyMeasure() {
		(0, _classCallCheck3.default)(this, KeyMeasure);
		return (0, _possibleConstructorReturn3.default)(this, (KeyMeasure.__proto__ || (0, _getPrototypeOf2.default)(KeyMeasure)).call(this, _Monoids.Monoids.KEY));
	}

	(0, _createClass3.default)(KeyMeasure, [{
		key: 'measure',
		value: function measure(element) {
			return element;
		}
	}]);
	return KeyMeasure;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL0tleU1lYXN1cmUuanMiXSwibmFtZXMiOlsiS2V5TWVhc3VyZSIsIktFWSIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0lBRWFBLFUsV0FBQUEsVTs7O0FBRVosdUJBQWdCO0FBQUE7QUFBQSx1SUFDUixpQkFBUUMsR0FEQTtBQUVmOzs7OzBCQUVTQyxPLEVBQVU7QUFDbkIsVUFBT0EsT0FBUDtBQUNBIiwiZmlsZSI6IktleU1lYXN1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZWFzdXJlIH0gZnJvbSAnLi4vMC1iYXNlJyA7XG5pbXBvcnQgeyBNb25vaWRzIH0gZnJvbSAnLi4vLi4vMS1hcGkvMC1Nb25vaWRzJyA7XG5cbmV4cG9ydCBjbGFzcyBLZXlNZWFzdXJlIGV4dGVuZHMgTWVhc3VyZSB7XG5cblx0Y29uc3RydWN0b3IgKCApIHtcblx0XHRzdXBlciggTW9ub2lkcy5LRVkgKSA7XG5cdH1cblxuXHRtZWFzdXJlICggZWxlbWVudCApIHtcblx0XHRyZXR1cm4gZWxlbWVudCA7XG5cdH1cblxufVxuIl19