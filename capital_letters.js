//---- Capital Letters ----//

//The function caps takes a single string (word) as argument. 
//The function should return an ordered list containing the indexes of all capital letters in the string.

function caps (word) {
  let caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let result = [];
  //if a letter in word also exists in the array of capital letters push it's index number into the result array
  for (let i = 0; i < word.length; i++) {
    if(caps.includes(word[i])){
      result.push(word.indexOf(word[i]));
    }
  }
  return result;
};