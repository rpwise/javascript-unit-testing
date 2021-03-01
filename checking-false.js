// returns true
function falseIsFalse() {
    
  return false == false;

}

// checks if 0 is false
// returns true
function zeroIsFalse1() {

  return 0 == false;

}

// check if 0 is exactly equal to false
// returns false
function zeroIsFalse2() {

  return 0 === false;

}

module.exports = { falseIsFalse, zeroIsFalse1, zeroIsFalse2 }