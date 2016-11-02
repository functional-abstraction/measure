'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Max = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../0-base');

var _api = require('../../1-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Max = exports.Max = function (_Measure) {
	_inherits(Max, _Measure);

	function Max() {
		_classCallCheck(this, Max);

		return _possibleConstructorReturn(this, (Max.__proto__ || Object.getPrototypeOf(Max)).call(this, _api.Monoids.INTEGER_MAX));
	}

	_createClass(Max, [{
		key: 'measure',
		value: function measure(element) {
			return element;
		}
	}]);

	return Max;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL01heC5qcyJdLCJuYW1lcyI6WyJNYXgiLCJJTlRFR0VSX01BWCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztJQUVhQSxHLFdBQUFBLEc7OztBQUVaLGdCQUFnQjtBQUFBOztBQUFBLG1HQUNSLGFBQVFDLFdBREE7QUFFZjs7OzswQkFFU0MsTyxFQUFVO0FBQ25CLFVBQU9BLE9BQVA7QUFDQSIsImZpbGUiOiJNYXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZWFzdXJlIH0gZnJvbSAnLi4vMC1iYXNlJyA7XG5pbXBvcnQgeyBNb25vaWRzIH0gZnJvbSAnLi4vLi4vMS1hcGknIDtcblxuZXhwb3J0IGNsYXNzIE1heCBleHRlbmRzIE1lYXN1cmUge1xuXG5cdGNvbnN0cnVjdG9yICggKSB7XG5cdFx0c3VwZXIoIE1vbm9pZHMuSU5URUdFUl9NQVggKSA7XG5cdH1cblxuXHRtZWFzdXJlICggZWxlbWVudCApIHtcblx0XHRyZXR1cm4gZWxlbWVudCA7XG5cdH1cblxufVxuIl19