//---- First Unique ----//

//The function firstUnique should take an arbitrary input string as paramete and return the first non-repeating character. 

function firstUnique(string) {
  var unique = [];
  //iterate through the string counting occurrences of each character
  for(var i = 0; i < string.length; i++) {
    var count = 0;
    for(var j = 0; j < string.length; j++) {
      if (string[i] == string[j]) {
        count++;
      }
    }
    //if a character occures only once push it into the unique array
    if (count < 2) {
          unique.push(string[i]);
        }
  } if (unique.length === 0) {
    return "No unique characters.";
  }
  //return the first unique character
  return unique[0];
}
