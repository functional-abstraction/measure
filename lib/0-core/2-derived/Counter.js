'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Counter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../0-base');

var _api = require('../../1-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = exports.Counter = function (_Measure) {
	_inherits(Counter, _Measure);

	function Counter() {
		_classCallCheck(this, Counter);

		return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, _api.Monoids.INTEGER_ADD));
	}

	_createClass(Counter, [{
		key: 'measure',
		value: function measure(element) {
			return 1;
		}
	}]);

	return Counter;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL0NvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsIklOVEVHRVJfQUREIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0lBRWFBLE8sV0FBQUEsTzs7O0FBRVosb0JBQWdCO0FBQUE7O0FBQUEsMkdBQ1IsYUFBUUMsV0FEQTtBQUVmOzs7OzBCQUVTQyxPLEVBQVU7QUFDbkIsVUFBTyxDQUFQO0FBQ0EiLCJmaWxlIjoiQ291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lYXN1cmUgfSBmcm9tICcuLi8wLWJhc2UnIDtcbmltcG9ydCB7IE1vbm9pZHMgfSBmcm9tICcuLi8uLi8xLWFwaScgO1xuXG5leHBvcnQgY2xhc3MgQ291bnRlciBleHRlbmRzIE1lYXN1cmUge1xuXG5cdGNvbnN0cnVjdG9yICggKSB7XG5cdFx0c3VwZXIoIE1vbm9pZHMuSU5URUdFUl9BREQgKSA7XG5cdH1cblxuXHRtZWFzdXJlICggZWxlbWVudCApIHtcblx0XHRyZXR1cm4gMSA7XG5cdH1cblxufVxuIl19