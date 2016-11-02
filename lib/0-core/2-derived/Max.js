'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Max = undefined;

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

var Max = exports.Max = function (_Measure) {
	(0, _inherits3.default)(Max, _Measure);

	function Max() {
		(0, _classCallCheck3.default)(this, Max);
		return (0, _possibleConstructorReturn3.default)(this, (Max.__proto__ || (0, _getPrototypeOf2.default)(Max)).call(this, _Monoids.Monoids.INTEGER_MAX));
	}

	(0, _createClass3.default)(Max, [{
		key: 'measure',
		value: function measure(element) {
			return element;
		}
	}]);
	return Max;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL01heC5qcyJdLCJuYW1lcyI6WyJNYXgiLCJJTlRFR0VSX01BWCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0lBRWFBLEcsV0FBQUEsRzs7O0FBRVosZ0JBQWdCO0FBQUE7QUFBQSx5SEFDUixpQkFBUUMsV0FEQTtBQUVmOzs7OzBCQUVTQyxPLEVBQVU7QUFDbkIsVUFBT0EsT0FBUDtBQUNBIiwiZmlsZSI6Ik1heC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lYXN1cmUgfSBmcm9tICcuLi8wLWJhc2UnIDtcbmltcG9ydCB7IE1vbm9pZHMgfSBmcm9tICcuLi8uLi8xLWFwaS8wLU1vbm9pZHMnIDtcblxuZXhwb3J0IGNsYXNzIE1heCBleHRlbmRzIE1lYXN1cmUge1xuXG5cdGNvbnN0cnVjdG9yICggKSB7XG5cdFx0c3VwZXIoIE1vbm9pZHMuSU5URUdFUl9NQVggKSA7XG5cdH1cblxuXHRtZWFzdXJlICggZWxlbWVudCApIHtcblx0XHRyZXR1cm4gZWxlbWVudCA7XG5cdH1cblxufVxuIl19