"use strict";

function getProduct(firstValue) {
    return function(secondValue) {
        const validateResult = validate(firstValue) ?? validate(secondValue) ?? '';

        if (validateResult) {
            return validateResult;
        }

        return firstValue * secondValue;
    };

    function validate(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            return 'Error: Value is not a number';
        }
    }
}

console.log(getProduct(3.4)(3));
console.log(getProduct(5)(3));
console.log(getProduct('5')(3));
console.log(getProduct('sdfsdfsdf')(3));
console.log(getProduct(NaN)('sdf'));
console.log(getProduct(-3)(true));
console.log(getProduct(-3)(-5555555555555));
