//---- Exes And Ohs ----//

//The function XO should check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contains any char.

function XO(str) {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === 'X') {
      xCount++;
    } else if (str[i].toUpperCase() === 'O') {
      oCount++;
    }
  }
  return xCount === oCount;
}