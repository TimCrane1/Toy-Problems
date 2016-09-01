//---- Descending Frequency Ascending Order ----//

//The function charFreq should take as its input a string and return an array of arrays sorted in descending order by frequency and then by ascending order by character.
//For example: "mississippi"  =>  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]


function charFreq (string) {
  var obj = {};
  var result = [];
  if (string === "") {
    return [];
  }
  //iterating through the string, if the character at the i position does not exist in the object, put it in and give it a value of one
  for (var i = 0; i < string.length; i++) {
    if (obj[string[i]] === undefined) {
      obj[string[i]] = 1;
    } else {
      //if it does exist, increment it's value
      obj[string[i]]++;
    }
  } 
  //convert the key-value pairs in the object to arrays
  for (var prop in obj) {
    result.push([prop, obj[prop]]);
  }
  //sort the arrays by descending frequency and ascending order
  result = result.sort(function(a, b) {
    if (a[1] < b[1]) {
      return 1;
    } else if (a[1] > b[1]) {
      return -1
    } else {
        if (a[0] < b[0]) {
        return -1 ;
      } else if (a[0] > b[0]) {
        return 1;
      }
    }    
});
  return result;
}