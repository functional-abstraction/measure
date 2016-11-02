'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.KeyMeasure = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../0-base');

var _Monoids = require('../../1-api/0-Monoids');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeyMeasure = exports.KeyMeasure = function (_Measure) {
	_inherits(KeyMeasure, _Measure);

	function KeyMeasure() {
		_classCallCheck(this, KeyMeasure);

		return _possibleConstructorReturn(this, (KeyMeasure.__proto__ || Object.getPrototypeOf(KeyMeasure)).call(this, _Monoids.Monoids.KEY));
	}

	_createClass(KeyMeasure, [{
		key: 'measure',
		value: function measure(element) {
			return element;
		}
	}]);

	return KeyMeasure;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL0tleU1lYXN1cmUuanMiXSwibmFtZXMiOlsiS2V5TWVhc3VyZSIsIktFWSIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztJQUVhQSxVLFdBQUFBLFU7OztBQUVaLHVCQUFnQjtBQUFBOztBQUFBLGlIQUNSLGlCQUFRQyxHQURBO0FBRWY7Ozs7MEJBRVNDLE8sRUFBVTtBQUNuQixVQUFPQSxPQUFQO0FBQ0EiLCJmaWxlIjoiS2V5TWVhc3VyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lYXN1cmUgfSBmcm9tICcuLi8wLWJhc2UnIDtcbmltcG9ydCB7IE1vbm9pZHMgfSBmcm9tICcuLi8uLi8xLWFwaS8wLU1vbm9pZHMnIDtcblxuZXhwb3J0IGNsYXNzIEtleU1lYXN1cmUgZXh0ZW5kcyBNZWFzdXJlIHtcblxuXHRjb25zdHJ1Y3RvciAoICkge1xuXHRcdHN1cGVyKCBNb25vaWRzLktFWSApIDtcblx0fVxuXG5cdG1lYXN1cmUgKCBlbGVtZW50ICkge1xuXHRcdHJldHVybiBlbGVtZW50IDtcblx0fVxuXG59XG4iXX0=