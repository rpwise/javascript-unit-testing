// returns true
function trueIsTrue() {
    
    return true == true;

}

// returns true
function oneIsTrue() {
    
    return 1 == true;

}

// returns false
function oneIsNotTrue() {
    
    return 1 === true;

}

// returns false
function trueIsFalse1() {
    
    return 'true' === true;

}

// returns false
function trueIsFalse2(){

    return 'true' == true;

}

// returns false
function trueIsFalse3(){

    return true == "true";

}

// export multiple functions as an array
module.exports = { trueIsTrue, oneIsTrue, oneIsNotTrue, trueIsFalse1, trueIsFalse2, trueIsFalse3 }