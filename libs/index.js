'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _combination = require('./combination');

var _combination2 = _interopRequireDefault(_combination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getArray = function getArray(arg) {
    var arr = void 0;
    if (_underscore2.default.isArray(arg)) {
        arr = arg;
    } else if (_underscore2.default.isString(arg)) {
        arr = arg.split('');
    } else {
        throw new Error('invalid param for arrangement');
    }

    return arr;
};

var isArrangementFromCombination = function isArrangementFromCombination(arrangement, combination) {
    var arrangementArr = void 0,
        combinationArr = void 0;

    arrangementArr = getArray(arrangement);
    combinationArr = getArray(combination);

    arrangementArr.sort();
    combinationArr.sort();

    return arrangementArr.join('') === combinationArr.join('');
};

exports.default = _extends({}, _combination2.default, {
    isArrangementFromCombination: isArrangementFromCombination
});