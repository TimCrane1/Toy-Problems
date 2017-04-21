//---- Persistence ----//

//The function persistence takes in a positive parameter num and returns its multiplicative persistence,
//the number of times the digits in num will be multiplied until you reach a single digit.

//For example:

//persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

//persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

//persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
  //this function splits the num into an array of it's digits
  function numToArray(int) {
    return int.toString().split("").map(function(t){return parseInt(t)});
  }
  //if there is only one digit return 0
  if (numToArray(num).length === 1){
    return 0;
  }
  let count = 1;
  //this function creates an array of digits and iterates over it multiplying each digit by the next.
  //if the sum of digits multiplied together is a one-digit number, 'multiply' returns.
  //otherwise, count is incremented and 'multiply' calls itself recursively with the sum as an argument.
  function multiply(num){
    let numsArr = numToArray(num);
    let result = numsArr[0];
    for (let i = 1; i < numsArr.length; i++) {
      console.log('result', result)
      result*= numsArr[i];    
    }
    if (numToArray(result).length > 1) {
      count++;
      multiply(result);
    } else {
      return;
    }    
  }
  //call multiply with num as argument and return count
  multiply(num);
  return count;
}