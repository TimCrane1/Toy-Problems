//---- Flatten Array ----//

//The function flattenArray should take an array of arrays and return a single array of all the elements.
//For example: [ 1, 2, [ 3 ], 4, [ 5, [ 6 ], 7 ] ]  =>  [ 1, 2, 3, 4, 5, 6, 7 ]
//flattenArray should use resursion

function flattenArray (arrays) {
  var result = [];
  //iterate is a helper function that recursively calls itself if the current element is an array
  function iterate(arr) {
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        iterate(el);
      } else {
        result.push(el);
      }
    })
  }
  
  iterate(arrays);
  return result;
}