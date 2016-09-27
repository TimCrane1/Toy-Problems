//---- Common Characters ----//

//The function comChar should accept two strings as arguments, and return only the  
//characters that are common to both strings in the order inwhich they originally appear.
//Duplicate characters and whitespace should be ignored.
//For example: comChar('acexivou', 'aegihobu') => 'aeiou'

//comChar using nested 'for' loops
comChar = function(string1, string2) {
  var result = '';
  for(var i = 0; i < string1.length; i++) {
    for(var j = 0; j < string2.length; j++) {
      if(string1[i] && string1[i] == string2[j] && result.indexOf(string1[i]) == -1) {
        result = result + string1[i];
      }
    }
  }
  result = result.split(' ');
  result = result.join('');
  return result;
};
