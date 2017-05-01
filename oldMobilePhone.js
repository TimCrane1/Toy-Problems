//---- Old Mobile Phone ----//

// User-Story: Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------

// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.
// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.
// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. 
// The function 'presses' should determine how many key presses are required to type a message.
// Example: presses("HOW R U") ==> 13;

//separate letters and numbers by how many presses it take to type them,
//iterate over input phrase adding the number of presses for each character to the count
function presses(phrase) {
  let count = 0;
  let ones = "ADGJMPTW1";
  let twos = "BEHKNQUX0";
  let threes = "CFILORVY";
  let fours = "SZ234568";
  let fives = "79";
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === " ") {
      count+= 1;  
    } else if (ones.indexOf(phrase[i].toUpperCase()) !== -1) {
        count+= 1;
      } else if (twos.indexOf(phrase[i].toUpperCase()) !== -1) {
        count+= 2;
      } else if (threes.indexOf(phrase[i].toUpperCase()) !== -1) {
        count+= 3;
      } else if (fours.indexOf(phrase[i].toUpperCase()) !== -1) {
        count+= 4;
      } else if (fives.indexOf(phrase[i].toUpperCase()) !== -1) {
        count+= 5;
      }
  }
  return count;
}