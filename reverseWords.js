//---- Reverse Words ----//

//reverse the word

function reverseWords(str) {
  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
    result+= str[i];
  }
  return result;
} 