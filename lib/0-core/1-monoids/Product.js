"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.product = product;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = exports.Product = function () {
	function Product(a, b) {
		_classCallCheck(this, Product);

		this.a = a;
		this.b = b;
	}

	_createClass(Product, [{
		key: "zero",
		value: function zero() {
			return [this.a.zero(), this.b.zero()];
		}

		/**
   * @param first
   * @param second
   */

	}, {
		key: "plus",
		value: function plus(_ref, _ref2) {
			var _ref4 = _slicedToArray(_ref, 2),
			    a = _ref4[0],
			    b = _ref4[1];

			var _ref3 = _slicedToArray(_ref2, 2),
			    A = _ref3[0],
			    B = _ref3[1];

			return [this.a.plus(a, A), this.b.plus(b, B)];
		}
	}]);

	return Product;
}();

function product(a, b) {
	return new Product(a, b);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMS1tb25vaWRzL1Byb2R1Y3QuanMiXSwibmFtZXMiOlsicHJvZHVjdCIsIlByb2R1Y3QiLCJhIiwiYiIsInplcm8iLCJBIiwiQiIsInBsdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7UUFxQmdCQSxPLEdBQUFBLE87Ozs7SUFyQkhDLE8sV0FBQUEsTztBQUVaLGtCQUFjQyxDQUFkLEVBQWtCQyxDQUFsQixFQUFzQjtBQUFBOztBQUNyQixPQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxPQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQTs7Ozt5QkFFUTtBQUNSLFVBQU8sQ0FBRSxLQUFLRCxDQUFMLENBQU9FLElBQVAsRUFBRixFQUFtQixLQUFLRCxDQUFMLENBQU9DLElBQVAsRUFBbkIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7O29DQUkrQjtBQUFBO0FBQUEsT0FBdEJGLENBQXNCO0FBQUEsT0FBbEJDLENBQWtCOztBQUFBO0FBQUEsT0FBVkUsQ0FBVTtBQUFBLE9BQU5DLENBQU07O0FBQzlCLFVBQU8sQ0FBRSxLQUFLSixDQUFMLENBQU9LLElBQVAsQ0FBYUwsQ0FBYixFQUFpQkcsQ0FBakIsQ0FBRixFQUF5QixLQUFLRixDQUFMLENBQU9JLElBQVAsQ0FBYUosQ0FBYixFQUFpQkcsQ0FBakIsQ0FBekIsQ0FBUDtBQUNBOzs7Ozs7QUFJSyxTQUFTTixPQUFULENBQW1CRSxDQUFuQixFQUF1QkMsQ0FBdkIsRUFBMkI7QUFDakMsUUFBTyxJQUFJRixPQUFKLENBQWFDLENBQWIsRUFBaUJDLENBQWpCLENBQVA7QUFDQSIsImZpbGUiOiJQcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2R1Y3Qge1xuXG5cdGNvbnN0cnVjdG9yICggYSAsIGIgKSB7XG5cdFx0dGhpcy5hID0gYSA7XG5cdFx0dGhpcy5iID0gYiA7XG5cdH1cblxuXHR6ZXJvICggKSB7XG5cdFx0cmV0dXJuIFsgdGhpcy5hLnplcm8oICkgLCB0aGlzLmIuemVybyggKSBdIDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gZmlyc3Rcblx0ICogQHBhcmFtIHNlY29uZFxuXHQgKi9cblx0cGx1cyAoIFsgYSAsIGIgXSAsIFsgQSAsIEIgXSApIHtcblx0XHRyZXR1cm4gWyB0aGlzLmEucGx1cyggYSAsIEEgKSAsIHRoaXMuYi5wbHVzKCBiICwgQiApIF0gO1xuXHR9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3QgKCBhICwgYiApIHtcblx0cmV0dXJuIG5ldyBQcm9kdWN0KCBhICwgYiApIDtcbn1cbiJdfQ==