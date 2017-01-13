'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isArrayEqual = function isArrayEqual(arrA, arrB) {
    return arrA.join('') === arrB.join('');
};

var generateCombinationMapping = function generateCombinationMapping() {
    var totalNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var selectNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (!_underscore2.default.isNumber(totalNum)) {
        throw new Error('invalid number value for totalNum');
    }

    if (!_underscore2.default.isNumber(selectNum)) {
        throw new Error('invalid number value for selectNum');
    }

    var firstSet = void 0,
        lastSet = void 0,
        fullSet = [];
    for (var i = 0; i < totalNum; i++) {
        fullSet[i] = i + 1;
    }
    firstSet = fullSet.slice(0, selectNum);
    lastSet = fullSet.slice(totalNum - selectNum, totalNum);

    var returnResult = [],
        nextSet = firstSet;
    while (!isArrayEqual(nextSet, lastSet)) {

        var maxIndex = -1,
            tmpChangeValue = -1;
        for (var _i = 0; _i < selectNum; _i++) {
            tmpChangeValue = nextSet[_i] + 1;
            if (tmpChangeValue <= totalNum && nextSet.indexOf(tmpChangeValue) === -1) {
                maxIndex = _i;
            }
        }

        returnResult.push(nextSet);

        nextSet = [].concat(_toConsumableArray(nextSet));
        var maxValue = nextSet[maxIndex];
        for (var _i2 = maxIndex, j = 1; _i2 < selectNum; _i2++) {
            nextSet[_i2] = maxValue + j;
            if (++j > selectNum - maxIndex) {
                break;
            }
        }
    }
    returnResult.push(nextSet);

    return returnResult;
};

var generateCombination = function generateCombination(itemList, selectNum) {
    var targetList = void 0;
    if (_underscore2.default.isArray(itemList)) {
        targetList = itemList;
    } else if (_underscore2.default.isString(itemList)) {
        targetList = itemList.split('');
    } else {
        throw new Error('invalid value for itemList');
    }

    if (!_underscore2.default.isNumber(selectNum) || selectNum <= 0 || itemList.length < selectNum) {
        throw new Error('invalid value for selectNum');
    }

    var combinationMapping = generateCombinationMapping(targetList.length, selectNum);
    var combinations = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = combinationMapping[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var mapping = _step.value;

            var targetCombination = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = mapping[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var index = _step2.value;

                    targetCombination.push(targetList[index - 1]);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            combinations.push(targetCombination);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return combinations;
};

exports.default = {
    getCombination: generateCombination
};