/**
 * If element is an Number, then return true
 * 
 * @param {any} element 
 * @returns Boolean
 */
function checkToEverethingIsNumber(element) {
    if (element) {
        return Number.isSafeInteger(Number.parseInt(element));
    } else {
        return false;
    }
}
/**
 * 
 * 
 * @param {any} element 
 * @returns 
 */
function checkToSegmentFromOneToTen(element) {
    return (element >= 0) && (element <= 10) && (element !== null);
}
/**
 * 
 * 
 * @param {any} element 
 * @returns 
 */
function executeChecks(element) {
    return ((checkToEverethingIsNumber(element)) && (checkToSegmentFromOneToTen(element)));
}
/**
 * 
 * 
 * @param {any} sum 
 * @param {any} value 
 * @returns 
 */
function add(sum, value) {
    return Number(sum) + Number(value);
}

module.exports = {
    checkToEverethingIsNumber,
    checkToSegmentFromOneToTen,
    executeChecks,
    add
}