const ftoc = function(fTemp) {
let conversion = (fTemp - 32)/1.8
let rounded = Math.round(conversion*10) / 10
return rounded
};

const ctof = function(cTemp) {
  let conversion = (cTemp * 1.8) +32
  let rounded = Math.round(conversion*10) / 10
  return rounded
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
