"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCeilNumber = exports.createCeil = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _decimal = _interopRequireDefault(require("decimal.js"));

var _factory = require("../../utils/factory.js");

var _collection = require("../../utils/collection.js");

var _number = require("../../utils/number.js");

var _nearlyEqual = require("../../utils/bignumber/nearlyEqual.js");

var _algorithm = require("../../type/matrix/utils/algorithm11.js");

var _algorithm2 = require("../../type/matrix/utils/algorithm12.js");

var _algorithm3 = require("../../type/matrix/utils/algorithm14.js");

var name = 'ceil';
var dependencies = ['typed', 'config', 'round', 'matrix', 'equalScalar', 'zeros', 'DenseMatrix'];
var createCeilNumber = /* #__PURE__ */(0, _factory.factory)(name, ['typed', 'config', 'round'], function (_ref) {
  var typed = _ref.typed,
      config = _ref.config,
      round = _ref.round;
  return typed(name, {
    number: function number(x) {
      if ((0, _number.nearlyEqual)(x, round(x), config.epsilon)) {
        return round(x);
      } else {
        return Math.ceil(x);
      }
    },
    'number, number': function numberNumber(x, n) {
      if ((0, _number.nearlyEqual)(x, round(x, n), config.epsilon)) {
        return round(x, n);
      } else {
        var _split = "".concat(x, "e").split('e'),
            _split2 = (0, _slicedToArray2.default)(_split, 2),
            number = _split2[0],
            exponent = _split2[1];

        var result = Math.ceil(Number("".concat(number, "e").concat(Number(exponent) + n)));

        var _split3 = "".concat(result, "e").split('e');

        var _split4 = (0, _slicedToArray2.default)(_split3, 2);

        number = _split4[0];
        exponent = _split4[1];
        return Number("".concat(number, "e").concat(Number(exponent) - n));
      }
    }
  });
});
exports.createCeilNumber = createCeilNumber;
var createCeil = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref2) {
  var typed = _ref2.typed,
      config = _ref2.config,
      round = _ref2.round,
      matrix = _ref2.matrix,
      equalScalar = _ref2.equalScalar,
      zeros = _ref2.zeros,
      DenseMatrix = _ref2.DenseMatrix;
  var algorithm11 = (0, _algorithm.createAlgorithm11)({
    typed: typed,
    equalScalar: equalScalar
  });
  var algorithm12 = (0, _algorithm2.createAlgorithm12)({
    typed: typed,
    DenseMatrix: DenseMatrix
  });
  var algorithm14 = (0, _algorithm3.createAlgorithm14)({
    typed: typed
  });
  var ceilNumber = createCeilNumber({
    typed: typed,
    config: config,
    round: round
  });
  /**
   * Round a value towards plus infinity
   * If `x` is complex, both real and imaginary part are rounded towards plus infinity.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.ceil(x)
   *    math.ceil(x, n)
   *
   * Examples:
   *
   *    math.ceil(3.2)               // returns number 4
   *    math.ceil(3.8)               // returns number 4
   *    math.ceil(-4.2)              // returns number -4
   *    math.ceil(-4.7)              // returns number -4
   *
   *    math.ceil(3.212, 2)          // returns number 3.22
   *    math.ceil(3.288, 2)          // returns number 3.29
   *    math.ceil(-4.212, 2)         // returns number -4.21
   *    math.ceil(-4.782, 2)         // returns number -4.78
   *
   *    const c = math.complex(3.24, -2.71)
   *    math.ceil(c)                 // returns Complex 4 - 2i
   *    math.ceil(c, 1)              // returns Complex 3.3 - 2.7i
   *
   *    math.ceil([3.2, 3.8, -4.7])  // returns Array [4, 4, -4]
   *    math.ceil([3.21, 3.82, -4.71], 1)  // returns Array [3.3, 3.9, -4.7]
   *
   * See also:
   *
   *    floor, fix, round
   *
   * @param  {number | BigNumber | Fraction | Complex | Array | Matrix} x  Number to be rounded
   * @param  {number | BigNumber | Array} [n=0]                            Number of decimals
   * @return {number | BigNumber | Fraction | Complex | Array | Matrix} Rounded value
   */

  return typed('ceil', {
    number: ceilNumber.signatures.number,
    'number,number': ceilNumber.signatures['number,number'],
    Complex: function Complex(x) {
      return x.ceil();
    },
    'Complex, number': function ComplexNumber(x, n) {
      return x.ceil(n);
    },
    'Complex, BigNumber': function ComplexBigNumber(x, n) {
      return x.ceil(n.toNumber());
    },
    BigNumber: function BigNumber(x) {
      if ((0, _nearlyEqual.nearlyEqual)(x, round(x), config.epsilon)) {
        return round(x);
      } else {
        return x.ceil();
      }
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, n) {
      if ((0, _nearlyEqual.nearlyEqual)(x, round(x, n), config.epsilon)) {
        return round(x, n);
      } else {
        return x.toDecimalPlaces(n.toNumber(), _decimal.default.ROUND_CEIL);
      }
    },
    Fraction: function Fraction(x) {
      return x.ceil();
    },
    'Fraction, number': function FractionNumber(x, n) {
      return x.ceil(n);
    },
    'Fraction, BigNumber': function FractionBigNumber(x, n) {
      return x.ceil(n.toNumber());
    },
    'Array | Matrix': function ArrayMatrix(x) {
      // deep map collection, skip zeros since ceil(0) = 0
      return (0, _collection.deepMap)(x, this, true);
    },
    'Array, number | BigNumber': function ArrayNumberBigNumber(x, n) {
      var _this = this;

      // deep map collection, skip zeros since ceil(0) = 0
      return (0, _collection.deepMap)(x, function (i) {
        return _this(i, n);
      }, true);
    },
    'SparseMatrix, number | BigNumber': function SparseMatrixNumberBigNumber(x, y) {
      return algorithm11(x, y, this, false);
    },
    'DenseMatrix, number | BigNumber': function DenseMatrixNumberBigNumber(x, y) {
      return algorithm14(x, y, this, false);
    },
    'number | Complex | Fraction | BigNumber, Array': function numberComplexFractionBigNumberArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, this, true).valueOf();
    },
    'number | Complex | Fraction | BigNumber, Matrix': function numberComplexFractionBigNumberMatrix(x, y) {
      if (equalScalar(x, 0)) return zeros(y.size(), y.storage());

      if (y.storage() === 'dense') {
        return algorithm14(y, x, this, true);
      }

      return algorithm12(y, x, this, true);
    }
  });
});
exports.createCeil = createCeil;