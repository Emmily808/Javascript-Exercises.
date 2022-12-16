const leapYears = function (a) {
  let itsLeap = a % 4 == 0 
  let itsNotLeap = a % 100 == 0 && a % 400 != 0 || a % 4 != 0
  if (itsNotLeap) {
    return false;
}
if(itsLeap){
    return true
}
}

// Do not edit below this line
module.exports = leapYears;
