'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.KeyLen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../0-base');

var _api = require('../../1-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeyLen = exports.KeyLen = function (_Measure) {
	_inherits(KeyLen, _Measure);

	function KeyLen() {
		_classCallCheck(this, KeyLen);

		return _possibleConstructorReturn(this, (KeyLen.__proto__ || Object.getPrototypeOf(KeyLen)).call(this, _api.Monoids.KEY_ADD));
	}

	_createClass(KeyLen, [{
		key: 'measure',
		value: function measure(element) {
			return [element, 1];
		}
	}]);

	return KeyLen;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL0tleUxlbi5qcyJdLCJuYW1lcyI6WyJLZXlMZW4iLCJLRVlfQUREIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7O0FBRVosbUJBQWdCO0FBQUE7O0FBQUEseUdBQ1IsYUFBUUMsT0FEQTtBQUVmOzs7OzBCQUVTQyxPLEVBQVU7QUFDbkIsVUFBTyxDQUFFQSxPQUFGLEVBQVksQ0FBWixDQUFQO0FBQ0EiLCJmaWxlIjoiS2V5TGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVhc3VyZSB9IGZyb20gJy4uLzAtYmFzZScgO1xuaW1wb3J0IHsgTW9ub2lkcyB9IGZyb20gJy4uLy4uLzEtYXBpJyA7XG5cbmV4cG9ydCBjbGFzcyBLZXlMZW4gZXh0ZW5kcyBNZWFzdXJlIHtcblxuXHRjb25zdHJ1Y3RvciAoICkge1xuXHRcdHN1cGVyKCBNb25vaWRzLktFWV9BREQgKSA7XG5cdH1cblxuXHRtZWFzdXJlICggZWxlbWVudCApIHtcblx0XHRyZXR1cm4gWyBlbGVtZW50ICwgMSBdIDtcblx0fVxuXG59XG4iXX0=