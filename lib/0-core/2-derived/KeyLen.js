'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.KeyLen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../0-base');

var _Monoids = require('../../1-api/0-Monoids');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeyLen = exports.KeyLen = function (_Measure) {
	_inherits(KeyLen, _Measure);

	function KeyLen() {
		_classCallCheck(this, KeyLen);

		return _possibleConstructorReturn(this, (KeyLen.__proto__ || Object.getPrototypeOf(KeyLen)).call(this, _Monoids.Monoids.KEY_ADD));
	}

	_createClass(KeyLen, [{
		key: 'measure',
		value: function measure(element) {
			return [element, 1];
		}
	}]);

	return KeyLen;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL0tleUxlbi5qcyJdLCJuYW1lcyI6WyJLZXlMZW4iLCJLRVlfQUREIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7O0FBRVosbUJBQWdCO0FBQUE7O0FBQUEseUdBQ1IsaUJBQVFDLE9BREE7QUFFZjs7OzswQkFFU0MsTyxFQUFVO0FBQ25CLFVBQU8sQ0FBRUEsT0FBRixFQUFZLENBQVosQ0FBUDtBQUNBIiwiZmlsZSI6IktleUxlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lYXN1cmUgfSBmcm9tICcuLi8wLWJhc2UnIDtcbmltcG9ydCB7IE1vbm9pZHMgfSBmcm9tICcuLi8uLi8xLWFwaS8wLU1vbm9pZHMnIDtcblxuZXhwb3J0IGNsYXNzIEtleUxlbiBleHRlbmRzIE1lYXN1cmUge1xuXG5cdGNvbnN0cnVjdG9yICggKSB7XG5cdFx0c3VwZXIoIE1vbm9pZHMuS0VZX0FERCApIDtcblx0fVxuXG5cdG1lYXN1cmUgKCBlbGVtZW50ICkge1xuXHRcdHJldHVybiBbIGVsZW1lbnQgLCAxIF0gO1xuXHR9XG5cbn1cbiJdfQ==