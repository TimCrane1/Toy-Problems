//---- Arrayception ----//

//The function arrayception takes as a parameter an array of arbitrarily nested arrays.
//It should return a number representing the deepest level that contains a non-array value.
//For example: [ [ 5 ], [ [ ] ] ]  =>  2
//             [ 10, 20, 30, 40 ]  =>  1
//             [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]  =>  4


function arrayception(array) {
  //keep track how many levels deep
  var level = 0;
  //helper function iterates over each array it comes to recursively
  function dive(arr, depth){
    arr.forEach(el => {
      //if the element is an array and it's not empty, increment the depth(level) and recursively invoke dive on element
      if (Array.isArray(el) && el[0] !== undefined) {
        dive(el, depth +1);
        //if the array is empty and the depth +1 is greater than level, set level to the value of depth +1 
        //which is the deepest level so far
      } else if (!Array.isArray(el) && depth +1 > level) {
        level = depth +1;
      }
    });
  }
  //invoke dive on the array with level passed as the depth
  dive(array, level);
  return level;
}

