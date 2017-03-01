//---- Array Middle ----//

//The function arrayMiddle recieves as an argument an array of positive/negative 
//integers.  It returns the integer in the center position of the array.  If the 
//array has an even number of integers it returns the average of the two middle 
//integers.

function arrayMiddle (numbers) {
  //if there is an even number of integers...
  if (numbers.length % 2 === 0) {
    //return the average of the middle two numbers
    return (numbers[Math.floor(numbers.length / 2) -1] + numbers[Math.floor(numbers.length / 2)]) / 2;
  } 
  //otherwise return the interger at the middle position
  return numbers[Math.floor(numbers.length / 2)];
}