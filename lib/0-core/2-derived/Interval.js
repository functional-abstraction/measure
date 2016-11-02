'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Interval = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../0-base');

var _Monoids = require('../../1-api/0-Monoids');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Interval = exports.Interval = function (_Measure) {
	_inherits(Interval, _Measure);

	function Interval() {
		_classCallCheck(this, Interval);

		return _possibleConstructorReturn(this, (Interval.__proto__ || Object.getPrototypeOf(Interval)).call(this, _Monoids.Monoids.KEY_MAX));
	}

	_createClass(Interval, [{
		key: 'measure',
		value: function measure(element) {
			return element;
		}
	}]);

	return Interval;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL0ludGVydmFsLmpzIl0sIm5hbWVzIjpbIkludGVydmFsIiwiS0VZX01BWCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztJQUVhQSxRLFdBQUFBLFE7OztBQUVaLHFCQUFnQjtBQUFBOztBQUFBLDZHQUNSLGlCQUFRQyxPQURBO0FBRWY7Ozs7MEJBRVNDLE8sRUFBVTtBQUNuQixVQUFPQSxPQUFQO0FBQ0EiLCJmaWxlIjoiSW50ZXJ2YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZWFzdXJlIH0gZnJvbSAnLi4vMC1iYXNlJyA7XG5pbXBvcnQgeyBNb25vaWRzIH0gZnJvbSAnLi4vLi4vMS1hcGkvMC1Nb25vaWRzJyA7XG5cbmV4cG9ydCBjbGFzcyBJbnRlcnZhbCBleHRlbmRzIE1lYXN1cmUge1xuXG5cdGNvbnN0cnVjdG9yICggKSB7XG5cdFx0c3VwZXIoIE1vbm9pZHMuS0VZX01BWCApIDtcblx0fVxuXG5cdG1lYXN1cmUgKCBlbGVtZW50ICkge1xuXHRcdHJldHVybiBlbGVtZW50IDtcblx0fVxuXG59XG4iXX0=