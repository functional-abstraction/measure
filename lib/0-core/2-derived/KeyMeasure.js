'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.KeyMeasure = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../0-base');

var _api = require('../../1-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeyMeasure = exports.KeyMeasure = function (_Measure) {
	_inherits(KeyMeasure, _Measure);

	function KeyMeasure() {
		_classCallCheck(this, KeyMeasure);

		return _possibleConstructorReturn(this, (KeyMeasure.__proto__ || Object.getPrototypeOf(KeyMeasure)).call(this, _api.Monoids.KEY));
	}

	_createClass(KeyMeasure, [{
		key: 'measure',
		value: function measure(element) {
			return element;
		}
	}]);

	return KeyMeasure;
}(_base.Measure);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMi1kZXJpdmVkL0tleU1lYXN1cmUuanMiXSwibmFtZXMiOlsiS2V5TWVhc3VyZSIsIktFWSIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztJQUVhQSxVLFdBQUFBLFU7OztBQUVaLHVCQUFnQjtBQUFBOztBQUFBLGlIQUNSLGFBQVFDLEdBREE7QUFFZjs7OzswQkFFU0MsTyxFQUFVO0FBQ25CLFVBQU9BLE9BQVA7QUFDQSIsImZpbGUiOiJLZXlNZWFzdXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVhc3VyZSB9IGZyb20gJy4uLzAtYmFzZScgO1xuaW1wb3J0IHsgTW9ub2lkcyB9IGZyb20gJy4uLy4uLzEtYXBpJyA7XG5cbmV4cG9ydCBjbGFzcyBLZXlNZWFzdXJlIGV4dGVuZHMgTWVhc3VyZSB7XG5cblx0Y29uc3RydWN0b3IgKCApIHtcblx0XHRzdXBlciggTW9ub2lkcy5LRVkgKSA7XG5cdH1cblxuXHRtZWFzdXJlICggZWxlbWVudCApIHtcblx0XHRyZXR1cm4gZWxlbWVudCA7XG5cdH1cblxufVxuIl19