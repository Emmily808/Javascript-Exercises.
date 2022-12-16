const removeFromArray = function () {
  let array = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    let currPam = arguments[i];
    let currInd;
    if (!array.includes(currPam)) {
      continue;
    }
       currInd = array.indexOf(arguments[i]);
    array.splice(currInd, 1);
  }
  return array;
};

console.log(removeFromArray([1, 2, 3, 4, 4], 4))
// Do not edit below this line
module.exports = removeFromArray;
