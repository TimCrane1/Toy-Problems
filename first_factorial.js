//---- First Factorial ----//

//In mathematics, the factorial of a non-negative integer, n, is the product of all positive integers less than or equal to n. 
//For example, the factorial of 5: 5 * 4 * 3 * 2 * 1 => 120.

//FirstFactorial should be a function that takes the 'num' parameter being passed to it and returns the factorial of that parameter.

function FirstFactorial(num) { 
  var factorial = 1;
  for (var i = 1; i <= num; i++) {
      factorial = factorial * i;
  }
  return factorial;   
};