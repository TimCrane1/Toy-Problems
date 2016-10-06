//---- Sum Zero ----//

//The function sumZero takes as parameter an array of numbers.
//If the sum of any two numbers is zero it should return true, otherwise false.

function sumZero(numbers) {
  //check that there is at least two numbers
  if (numbers.length < 2) {
    return false;
  }
  //iterate through the numbers
  for (var i = 0; i < numbers.length; i++) {
    //for each number iterate through the other numbers checking if the two numbers' sum equals 0
    for (var j = i + 1; j< numbers.length; j++) {
      if (numbers[i] + numbers[j] === 0) {
        return true;
      }
    }
  }  
  return false;
}