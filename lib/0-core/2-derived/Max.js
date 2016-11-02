'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Max = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../0-base');

var _Monoids = require('../../1-api/0-Monoids');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Max = exports.Max = function (_Measure) {
	_inherits(Max, _Measure);

	function Max() {
		_classCallCheck(this, Max);

		return _possibleConstructorReturn(this, (Max.__proto__ || Object.getPrototypeOf(Max)).call(this, _Monoids.Monoids.INTEGER_MAX));
	}

	_createClass(Max, [{
		key: 'measure',
		value: function measure(element) {
			return element;
		}
	}]);

	return Max;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL01heC5qcyJdLCJuYW1lcyI6WyJNYXgiLCJJTlRFR0VSX01BWCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztJQUVhQSxHLFdBQUFBLEc7OztBQUVaLGdCQUFnQjtBQUFBOztBQUFBLG1HQUNSLGlCQUFRQyxXQURBO0FBRWY7Ozs7MEJBRVNDLE8sRUFBVTtBQUNuQixVQUFPQSxPQUFQO0FBQ0EiLCJmaWxlIjoiTWF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVhc3VyZSB9IGZyb20gJy4uLzAtYmFzZScgO1xuaW1wb3J0IHsgTW9ub2lkcyB9IGZyb20gJy4uLy4uLzEtYXBpLzAtTW9ub2lkcycgO1xuXG5leHBvcnQgY2xhc3MgTWF4IGV4dGVuZHMgTWVhc3VyZSB7XG5cblx0Y29uc3RydWN0b3IgKCApIHtcblx0XHRzdXBlciggTW9ub2lkcy5JTlRFR0VSX01BWCApIDtcblx0fVxuXG5cdG1lYXN1cmUgKCBlbGVtZW50ICkge1xuXHRcdHJldHVybiBlbGVtZW50IDtcblx0fVxuXG59XG4iXX0=