"use strict";

function getSum(firstValue) {
    return function(secondValue) {
        const validateResult = validate(firstValue) ?? validate(secondValue) ?? '';

        if (validateResult) {
            return validateResult;
        }

        return firstValue + secondValue;
    };

    function validate(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            return 'Error: Value is not a number';
        }
    }
}

console.log(getSum(3.4)(3));
console.log(getSum(5)(3));
console.log(getSum('5')(3));
console.log(getSum('sdfsdfsdf')(3));
console.log(getSum(NaN)('sdf'));
console.log(getSum(-3)(true));
console.log(getSum(-3)(-5555555555555));
