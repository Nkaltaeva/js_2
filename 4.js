'use strict';
/**
 * Сложение переданных параметров
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function sum(a, b) {
    return a + b;
}
/**
 * Из а вычитаем b
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
 * Умножение a на b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
 function multiplication(a, b) {
    return a * b;
}
/** 
 * Деление a на b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}
