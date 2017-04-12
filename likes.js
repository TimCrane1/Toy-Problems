//---- Likes ----//

//Similar to the "like" system from Facebook and other pages.  
//The like function must take in input array containing the names of people who like an item and return the display text as shown in the following examples:

// likes [] --> "no one likes this"
// likes ["Peter"] --> "Peter likes this"
// likes ["Jacob", "Alex"] --> "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] --> "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"

function likes(names) {
  if (!names.length) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return names[0] + ' likes this';
  } else if (names.length === 2) {
    return names[0] + ' and ' + names[1] + ' like this';
  } else if (names.length === 3) {
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  } else if (names.length > 3) {
    return names[0] + ', ' + names[1] + ' and ' + (names.length -2) + ' others like this';  
  }
}