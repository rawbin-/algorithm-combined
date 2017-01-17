'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isArrangementFromCombination = exports.getCombination = undefined;

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _combination = require('./combination');

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

exports.getCombination = _combination.getCombination;
exports.isArrangementFromCombination = isArrangementFromCombination;
exports.default = {
    getCombination: _combination.getCombination,
    isArrangementFromCombination: isArrangementFromCombination
};