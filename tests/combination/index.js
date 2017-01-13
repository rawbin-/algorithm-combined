import combinationObj from '../../src/'

const printTwoLevelArr = (arr) => {
    console.log('##################')
    for(let i of arr){
        console.log(i)
    }
    console.log('\n\n')
};

let result,
    charString = 'abcdef',
    charList = charString.split(''),
    numberList = [1,2,3,4,5,6];

result = combinationObj.getCombination(numberList,4);
printTwoLevelArr(result);

result = combinationObj.getCombination(charList,4);
printTwoLevelArr(result);

result = combinationObj.getCombination(charList,6);
printTwoLevelArr(result);


console.log(combinationObj.isArrangementFromCombination('123456',numberList))
console.log(combinationObj.isArrangementFromCombination('234561',numberList))
console.log(combinationObj.isArrangementFromCombination('234567',numberList))