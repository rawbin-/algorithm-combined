import _ from 'underscore'

const isArrayEqual = (arrA,arrB) => {
    return arrA.join('') === arrB.join('')
};

const generateCombinationMapping = (totalNum = 0,selectNum = 0) => {
    if(!_.isNumber(totalNum)){
        throw new Error('invalid number value for totalNum');
    }

    if(!_.isNumber(selectNum)){
        throw new Error('invalid number value for selectNum');
    }


    let firstSet,lastSet,fullSet = [];
    for(let i = 0; i < totalNum; i++){
        fullSet[i] = i + 1;
    }
    firstSet = fullSet.slice(0,selectNum);
    lastSet = fullSet.slice(totalNum - selectNum,totalNum)

    let returnResult = [],nextSet = firstSet;
    while(!isArrayEqual(nextSet,lastSet)){

        let maxIndex = -1,tmpChangeValue = -1;
        for(let i = 0; i < selectNum; i++){
            tmpChangeValue = nextSet[i] + 1;
            if(tmpChangeValue <= totalNum && nextSet.indexOf(tmpChangeValue) === -1){
                maxIndex = i;
            }
        }

        returnResult.push(nextSet);

        nextSet = [...nextSet];
        let maxValue = nextSet[maxIndex];
        for(let i = maxIndex,j = 1; i < selectNum; i++){
            nextSet[i] = maxValue + j;
            if(++j > selectNum - maxIndex){
                break;
            }
        }
    }
    returnResult.push(nextSet);

    return returnResult;
};

const generateCombination = (itemList,selectNum) => {
    let targetList;
    if(_.isArray(itemList)){
        targetList = itemList;
    }else if(_.isString(itemList)){
        targetList = itemList.split('');
    }else{
        throw new Error('invalid value for itemList')
    }

    if(!_.isNumber(selectNum) || selectNum <= 0 || itemList.length < selectNum){
        throw new Error('invalid value for selectNum')
    }

    let combinationMapping = generateCombinationMapping(targetList.length,selectNum);
    let combinations = [];

    for(let mapping  of combinationMapping){
        let targetCombination = [];
        for(let index of mapping){
            targetCombination.push(targetList[index - 1]);
        }
        combinations.push(targetCombination);
    }

    return combinations;
};


export default {
    getCombination:generateCombination
}
