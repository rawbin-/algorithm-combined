import _ from 'underscore'
import Combination from './combination'

const getArray = (arg) => {
    let arr;
    if(_.isArray(arg)){
        arr = arg;
    }else if(_.isString(arg)){
        arr = arg.split('');
    }else{
        throw new Error('invalid param for arrangement');
    }

    return arr;
};

const isArrangementFromCombination = (arrangement,combination) => {
    let arrangementArr,combinationArr;

    arrangementArr = getArray(arrangement);
    combinationArr = getArray(combination);

    arrangementArr.sort();
    combinationArr.sort();

    return arrangementArr.join('') === combinationArr.join('');

};

export default {
    ...Combination,
    isArrangementFromCombination
}