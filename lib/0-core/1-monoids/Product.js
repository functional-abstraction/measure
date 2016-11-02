"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Product = undefined;

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

exports.product = product;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Product = exports.Product = function () {
	function Product(a, b) {
		(0, _classCallCheck3.default)(this, Product);

		this.a = a;
		this.b = b;
	}

	(0, _createClass3.default)(Product, [{
		key: "zero",
		value: function zero() {
			return [this.a.zero(), this.b.zero()];
		}
	}, {
		key: "plus",
		value: function plus(_ref, _ref2) {
			var _ref4 = (0, _slicedToArray3.default)(_ref, 2),
			    a = _ref4[0],
			    b = _ref4[1];

			var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvMS1tb25vaWRzL1Byb2R1Y3QuanMiXSwibmFtZXMiOlsicHJvZHVjdCIsIlByb2R1Y3QiLCJhIiwiYiIsInplcm8iLCJBIiwiQiIsInBsdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFpQmdCQSxPLEdBQUFBLE87Ozs7SUFqQkhDLE8sV0FBQUEsTztBQUVaLGtCQUFjQyxDQUFkLEVBQWtCQyxDQUFsQixFQUFzQjtBQUFBOztBQUNyQixPQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxPQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQTs7Ozt5QkFFUTtBQUNSLFVBQU8sQ0FBRSxLQUFLRCxDQUFMLENBQU9FLElBQVAsRUFBRixFQUFtQixLQUFLRCxDQUFMLENBQU9DLElBQVAsRUFBbkIsQ0FBUDtBQUNBOzs7b0NBRThCO0FBQUE7QUFBQSxPQUF0QkYsQ0FBc0I7QUFBQSxPQUFsQkMsQ0FBa0I7O0FBQUE7QUFBQSxPQUFWRSxDQUFVO0FBQUEsT0FBTkMsQ0FBTTs7QUFDOUIsVUFBTyxDQUFFLEtBQUtKLENBQUwsQ0FBT0ssSUFBUCxDQUFhTCxDQUFiLEVBQWlCRyxDQUFqQixDQUFGLEVBQXlCLEtBQUtGLENBQUwsQ0FBT0ksSUFBUCxDQUFhSixDQUFiLEVBQWlCRyxDQUFqQixDQUF6QixDQUFQO0FBQ0E7Ozs7O0FBSUssU0FBU04sT0FBVCxDQUFtQkUsQ0FBbkIsRUFBdUJDLENBQXZCLEVBQTJCO0FBQ2pDLFFBQU8sSUFBSUYsT0FBSixDQUFhQyxDQUFiLEVBQWlCQyxDQUFqQixDQUFQO0FBQ0EiLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQcm9kdWN0IHtcblxuXHRjb25zdHJ1Y3RvciAoIGEgLCBiICkge1xuXHRcdHRoaXMuYSA9IGEgO1xuXHRcdHRoaXMuYiA9IGIgO1xuXHR9XG5cblx0emVybyAoICkge1xuXHRcdHJldHVybiBbIHRoaXMuYS56ZXJvKCApICwgdGhpcy5iLnplcm8oICkgXSA7XG5cdH1cblxuXHRwbHVzICggWyBhICwgYiBdICwgWyBBICwgQiBdICkge1xuXHRcdHJldHVybiBbIHRoaXMuYS5wbHVzKCBhICwgQSApICwgdGhpcy5iLnBsdXMoIGIgLCBCICkgXSA7XG5cdH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdCAoIGEgLCBiICkge1xuXHRyZXR1cm4gbmV3IFByb2R1Y3QoIGEgLCBiICkgO1xufVxuIl19