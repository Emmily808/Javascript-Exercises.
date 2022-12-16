const sumAll = function (a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let acumulator = [];
  let sum = 0;
  let isNegative = min < 0 || max < 0;
  let isNan = typeof a != "number" || typeof b != "number";

  if (isNegative || isNan) {
    return "ERROR";
  }

  for (let i = min; i <= max; i++) {
    acumulator.push(i);
  }

  acumulator.forEach((item) => {
    sum += item;
  });
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
