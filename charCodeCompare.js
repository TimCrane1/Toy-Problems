//---- ASCII Comparison ----//

//The function compare should compare two strings by the sum of their values (ASCII character code).
//All letters should be treated as UpperCase.
//Null-Strings should be treated as if they are empty strings.
//If the string contains other characters than letters, treat the whole string as it would be empty.

//Examples:
//"AD","BC" -> equal
//"AD","DD" -> not equal
//"gf","FG" -> equal
//"zz1","" -> equal
//"ZzZz", "ffPFF" -> equal
//"kl", "lz" -> not equal
//null, "" -> equal

function compare(s1, s2) {
  //call the summer function on both strings and compare results
  let sum1 = summer(s1);
  let sum2 = summer(s2);
    if(sum1 === sum2) {
    return true;
    }
    return false;
}

//function that does most of the work
function summer(str) {
  if(str === null){
    return 0;
  }
  //strip the string of all non-letters and compare stripped and non-stripped strings
  //if any non-letters are detected by comparison, the string should be replaced with an empty string
  let str1 = str.replace(/[^A-Za-z]/gi, '').replace(/ +/g, ' ');
  if (str != str1){
    str = '';
  }
  //convert to uppercase for comparison
  str = str.toUpperCase();
  let sum = 0;
  let split = str.split('');
  //add all ASCII character code values together and return the sum
  for (let i = 0; i < str.length; i++) {
    sum+= str.charCodeAt(i);
  }
    return sum;
}

