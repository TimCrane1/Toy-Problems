//---- Is Subset ----//

//The function isSubset should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubset (array, sub) {
  //quick check to make sure characters of sub occur at least once in array
  for (var i = 0; i < sub.length; i++) {
    if (array.indexOf(sub[i]) === -1) {
      return false
    }
  }
  //create objects from array and sub
  //check to make sure number of character occurances is not greater in the sub than in the array
  var big = makeObj(array);
  var small = makeObj(sub);
  for (var prop in small) {
    if (small[prop] > big[prop]) {
      return false;
    }
  }
  return true;
}

//helper function to create an object with character as key and number of occurances as value
function makeObj (arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  return obj;
}