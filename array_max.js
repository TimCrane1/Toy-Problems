//---- Array Max ----//

//The function arrayMax should return the largest element in an array of negative/positive integers.
//arrayMax should not utilize Math.max.

//using forEach
function arrayMax(numbers) {
  let result = numbers[0];
  numbers.forEach(num => {
    if (num > result) {
      result = num;
    }
  })
  return result;
}

//using reduce
function arrayMax(numbers) {
  return numbers.reduce((a, b) => a > b ? a : b);
}
