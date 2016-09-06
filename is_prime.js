//---- Is Prime ----//

//A prime number is an integer greater than 1 that has no divisors other than itself and 1. 
//The function isPrime should take n as a parameter and return true if n is a prime number, false if it’s not. 

function isPrime (n) {
  if (n < 2) {
    return false;
  }
  //get the square root of n
  var root = Math.sqrt(n);
  for (var i = 2; i <= root; i++) {
    //check that no number between 2 and root is a multiple of root
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}