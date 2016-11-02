'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Counter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../0-base');

var _Monoids = require('../../1-api/0-Monoids');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = exports.Counter = function (_Measure) {
	_inherits(Counter, _Measure);

	function Counter() {
		_classCallCheck(this, Counter);

		return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, _Monoids.Monoids.INTEGER_ADD));
	}

	_createClass(Counter, [{
		key: 'measure',
		value: function measure(element) {
			return 1;
		}
	}]);

	return Counter;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL0NvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsIklOVEVHRVJfQUREIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0lBRWFBLE8sV0FBQUEsTzs7O0FBRVosb0JBQWdCO0FBQUE7O0FBQUEsMkdBQ1IsaUJBQVFDLFdBREE7QUFFZjs7OzswQkFFU0MsTyxFQUFVO0FBQ25CLFVBQU8sQ0FBUDtBQUNBIiwiZmlsZSI6IkNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZWFzdXJlIH0gZnJvbSAnLi4vMC1iYXNlJyA7XG5pbXBvcnQgeyBNb25vaWRzIH0gZnJvbSAnLi4vLi4vMS1hcGkvMC1Nb25vaWRzJyA7XG5cbmV4cG9ydCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgTWVhc3VyZSB7XG5cblx0Y29uc3RydWN0b3IgKCApIHtcblx0XHRzdXBlciggTW9ub2lkcy5JTlRFR0VSX0FERCApIDtcblx0fVxuXG5cdG1lYXN1cmUgKCBlbGVtZW50ICkge1xuXHRcdHJldHVybiAxIDtcblx0fVxuXG59XG4iXX0=