/** @format */

Object.is = function ObjectIs(a, b) {
  const areBothNaN = a !== a && b !== b;
  const isNegativeZero = (x) => x === 0 && 1 / x === -Infinity;
  if (areBothNaN) return true;
  if (isNegativeZero(a) || isNegativeZero(b)) {
    return isNegativeZero(b) && isNegativeZero(b);
  }
  if (a === b) {
    return true;
  }
  return false;
};

function isNaN(x) {
  return x !== x;
}

function areBothNaN(x, y) {
  return isNaN(x) && isNaN(y);
}

function isNegativeZero(x) {
  return x === 0 && 1 / x === -Infinity;
}

console.log(Object.is(42, 42) === true);
console.log(Object.is('foo', 'foo') === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, '42') === false);
console.log(Object.is('42', 42) === false);
console.log(Object.is('foo', 'bar') === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
