/** @format */

var myObj = { a: 2 };
var values = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  '',
  '0',
  '42',
  '42hello',
  'true',
  'NaN',
  true,
  false,
  myObj,
];

function findAll(value, array) {
  let result = [];
  for (const i in array) {
    if (Object.is(value, array[i])) result.push(array[i]);
    else if (value == null && array[i] == null) result.push(array[i]);
    // eliminating corner cases
    else if (
      typeof value == 'string' &&
      value.trim() != '' &&
      typeof array[i] == 'number' &&
      !Object.is(array[i], -0)
    ) {
      // we se a doble-equal, because we've been eliminated the corner cases
      // trying to be more obvious with your types!
      if (value == array[i]) result.push(array[i]);
    }
    // eliminating corner cases
    else if (
      typeof value == 'number' &&
      !Object.is(value, Infinity) &&
      !Object.is(value, -Infinity) &&
      !Object.is(value, NaN) &&
      !Object.is(value, -0) &&
      typeof array[i] == 'string' &&
      array[i].trim() != ''
    ) {
      // there is a doble-equal, and we can trust that is safe!
      // because we've been eliminated the corner cases
      if (value == array[i]) result.push(array[i]);
    }
  }
  return result;
}

function setsMatch(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}

// findAll(null, values); // [null, undefined]
// findAll(undefined, values); // [null undefined]
// findAll(0, values); // [0, '0']
// findAll(-0, values); // [-0]
// findAll(13, values); // [13]
// findAll(42, values); // [42, '42']
// findAll(NaN, values); // [NaN]
// findAll(-Infinity, values); // [-Infinity]
// findAll(Infinity, values); // [Infinity]
// findAll('', values); // ['']
// findAll('42', values); // [42, '42']
// findAll('42hello', values); // ['42hello']
// findAll(true, values); // [true]
// findAll('true', values); // ['true']
// findAll(false, values); // [false]
// findAll(myObj, values); // [{a: 2}]

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, '0']) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, '42']) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll('', values), ['']) === true);
console.log(setsMatch(findAll('0', values), [0, '0']) === true);
console.log(setsMatch(findAll('42', values), [42, '42']) === true);
console.log(setsMatch(findAll('42hello', values), ['42hello']) === true);
console.log(setsMatch(findAll('true', values), ['true']) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, '42hello']) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(
  setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
);
console.log(setsMatch(findAll('', values), ['', 0]) === false);
console.log(setsMatch(findAll('false', values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, 'true']) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

/*
OBSERVATION
-----------
Coercion is safe when you've eliminate corner cases
And made it obvious courner cases are eliminated
*/
