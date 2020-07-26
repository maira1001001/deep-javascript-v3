/** @format */

// execise 1
// Define the function sign that recibes a number a return either a 1 or a -1,
//depending on the sing of the given number

function sign(number) {
  if (Object.is(number, 0)) return 1;
  if (Object.is(number, -0)) return -1;
  else return Math.sign(number);
}

function sign(v) {
  return v != 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

/**
 * I want to keep track of what direction something was moving
 * @param {number} trendRate
 */
function formatTrend(trendRate) {
  const signToArrow = sign(trendRate) === -1 ? '▼' : '▲';
  return `${signToArrow} ${Math.abs(trendRate)}`;
}

formatTrend(-3); // down three
formatTrend(3); // up three
formatTrend(0); // up zero
formatTrend(-0); // down zero
