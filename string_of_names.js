//---- String Of Names ----//

// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:
// stringOfNames([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// stringOfNames([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// stringOfNames([ {name: 'Bart'} ])
// returns 'Bart'

// stringOfNames([])
// returns ''

function stringOfNames(names){
  //if array is empty return emty string, if array contains only one name, return that name
  var result = '';
  if (names.length < 1) {
    return result;
  } else if (names.length === 1) {
      return names[0].name;
    }
  //iterate through the array concatenating names with commas and spaces until the last two names,
  //concatenate those with an ampersand
  for (var i = 0; i < names.length; i++) {
    if (i < names.length - 2) {
      result+= names[i].name + ", ";
    }
    else {
      return result+= (names[i].name + ' & ' + names[i+1].name);
    }
  }
}