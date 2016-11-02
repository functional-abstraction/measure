'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Interval = undefined;

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

var Interval = exports.Interval = function (_Measure) {
	(0, _inherits3.default)(Interval, _Measure);

	function Interval() {
		(0, _classCallCheck3.default)(this, Interval);
		return (0, _possibleConstructorReturn3.default)(this, (Interval.__proto__ || (0, _getPrototypeOf2.default)(Interval)).call(this, _Monoids.Monoids.KEY_MAX));
	}

	(0, _createClass3.default)(Interval, [{
		key: 'measure',
		value: function measure(element) {
			return element;
		}
	}]);
	return Interval;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL0ludGVydmFsLmpzIl0sIm5hbWVzIjpbIkludGVydmFsIiwiS0VZX01BWCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0lBRWFBLFEsV0FBQUEsUTs7O0FBRVoscUJBQWdCO0FBQUE7QUFBQSxtSUFDUixpQkFBUUMsT0FEQTtBQUVmOzs7OzBCQUVTQyxPLEVBQVU7QUFDbkIsVUFBT0EsT0FBUDtBQUNBIiwiZmlsZSI6IkludGVydmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVhc3VyZSB9IGZyb20gJy4uLzAtYmFzZScgO1xuaW1wb3J0IHsgTW9ub2lkcyB9IGZyb20gJy4uLy4uLzEtYXBpLzAtTW9ub2lkcycgO1xuXG5leHBvcnQgY2xhc3MgSW50ZXJ2YWwgZXh0ZW5kcyBNZWFzdXJlIHtcblxuXHRjb25zdHJ1Y3RvciAoICkge1xuXHRcdHN1cGVyKCBNb25vaWRzLktFWV9NQVggKSA7XG5cdH1cblxuXHRtZWFzdXJlICggZWxlbWVudCApIHtcblx0XHRyZXR1cm4gZWxlbWVudCA7XG5cdH1cblxufVxuIl19