'use strict';

/**
 * Осуществление все 4 математических уровнения над arg1 и arg2.
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation все 4 математических уровнения +-/*.
 * @throws {Error} если нет заданного уровнения, выдает ошибку.
 * @returns {number}
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+": return addition(arg1, arg2);
        case "-": return subtraction(arg1, arg2);
        case "*": return multiplication(arg1, arg2);
        case "/": return division(arg1, arg2);
        default: return NaN;
    }
}

console.log(mathOperation(3, 5, "+"));
console.log(mathOperation(3, 5, "-"));
console.log(mathOperation(3, 5, "/"));
console.log(mathOperation(3, 5, "*"));
console.log(mathOperation(3, 5, "lorem"));

/**
 * Сложение a + b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
    return a + b;
}

/**
 * Вычитание a - b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function difference(a, b) {
    if (a > b) {
      return a - b;
    }
    return b - a;
}

/**
 * Имножение a * b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
 function multiplication(a, b) {
    return a * b;
}

/**
 * Деление a / b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}