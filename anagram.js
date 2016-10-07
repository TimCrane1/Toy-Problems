//---- Anagram ----//

//An anagram is a word or phrase that exactly reproduces the letters in another order to produce a new word or phrase.
//The function isAnagram should take two strings as parameters and check to see if they are anagrams of each other, providing for non-letters and letters occuring more than once.
//For Example: "silent", "listen" => true; "torchwood", "doctor who" => true; "why?", "why not?" => false;

function isAnagram (a, b) {
	//get rid of spaces, check for length using regular expression
  a = a.replace(/ /g, '');
  b = b.replace(/ /g, '');
  
  if (a.length !== b.length) {
    return false;
  }
  //sort alphabetically
  var sortedA = a.replace(/[^a-zA-Z]/g, '').split('').sort();
  var sortedB = b.replace(/[^a-zA-Z]/g, '').split('').sort();
  //compare
  for (var i = 0; i < sortedA.length; i++) {
    if (sortedA[i] !== sortedB[i]) {
      return false;
    }
  }
  return true;
}
