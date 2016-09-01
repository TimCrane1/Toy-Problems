//---- Palindrome ----//

//The function Palindrome should recieve the 'str' parameter being passed and return true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return false. 
//For example: "racecar" is also "racecar" backwards.

function Palindrome (str) { 
  var revStr = "";
  for (var i = str.length -1; i >= 0; i--) {
     revStr += str[i];
  } 
  if (str.replace(/ /g, '') === revStr.replace(/ /g, '')) {
    return true;
  }
  return false;      
}