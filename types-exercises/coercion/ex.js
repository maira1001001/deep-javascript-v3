/** @format */

// TODO: write the validation functions
/** @format */

/**
   * Determine whether the input match with:
   * 	- it must be a string
	  - it must be non-empty
	  - it must contain non-whitespace of at least 3 characters
   * @param {string} name 
   * @return {Boolean} true if name matchs the 3 conditions, false otherwise
   */
function isValidName(name) {
  const isAString = typeof name == 'string';
  const isNonEmptyString = name != '';
  const hasAtLeast3NonWhiteSpacesCharacters = (name) => {
    let charUntilNow = 0;
    let index = 0;
    while (charUntilNow < 3 && index < name.length) {
      charUntilNow = name[index] !== ' ' ? charUntilNow + 1 : charUntilNow;
      index++;
    }
    return charUntilNow === 3;
  };
  return (
    isAString && isNonEmptyString && hasAtLeast3NonWhiteSpacesCharacters(name)
  );
}
/**
 * Determine if the two given parameters fulfill the following conditions:
 * 	- either parameter may only be a string or number
    - both parameters should be treated as numbers
    - both numbers must be 0 or higher
    - both numbers must be whole numbers
    - `attended` must be less than or equal to `length`
* @param {String} attended
* @param {Number} length
* @returns {Boolean} true if matchs all conditions, false otherwise
*/
const bothTypesAreStringOrNumber = (attended, length) => {
  return (
    ((typeof attended == 'string' && attended.trim() != '') ||
      typeof attended == 'number') &&
    ((typeof length == 'string' && length.trim() != '') ||
      typeof length == 'number')
  );
};

function hoursAttended(attended, length) {
  return (
    bothTypesAreStringOrNumber(attended, length) &&
    (() => {
      const attendedToNumber = Number(attended);
      const lengthToNumber = Number(length);
      return (
        typeof attendedToNumber == 'number' &&
        typeof lengthToNumber == 'number' &&
        attendedToNumber > 0 &&
        lengthToNumber > 0 &&
        Number.isInteger(attendedToNumber) &&
        Number.isInteger(lengthToNumber) &&
        attendedToNumber < lengthToNumber
      );
    })()
  );
}

// tests:
console.log(isValidName('Frank') === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, '10') === true);
console.log(hoursAttended('6', 10) === true);
console.log(hoursAttended('6', '10') === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName('') === false);
console.log(isValidName('  \t\n') === false);
console.log(isValidName('X') === false);
console.log(hoursAttended('', 6) === false);
console.log(hoursAttended(6, '') === false);
console.log(hoursAttended('', '') === false);
console.log(hoursAttended('foo', 6) === false);
console.log(hoursAttended(6, 'foo') === false);
console.log(hoursAttended('foo', 'bar') === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, '6') === false);
console.log(hoursAttended('10', 6) === false);
console.log(hoursAttended('10', '6') === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, '10.1') === false);
console.log(hoursAttended('6.1', 10) === false);
console.log(hoursAttended('6.1', '10.1') === false);
