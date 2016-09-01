//---- Find Person ----//

//findPerson should be a function that takes a name (string) and an array of people (objects) as parameters.
//If there is no person by that name findPerson should return false.
//Otherwise findPerson should return the hobby of the target person.

function findPerson (name, people) {
  var result = false;
  for(var i = 0; i < people.length; i++){
    if(people[i].name === name) {
      result = people[i].hobby;
    }
  }
  return result;
}

//////////recursively//////////
function findPerson(name, people) {
  if (people.length === 0) {
    return false;
  } else {
    return people[0].name === name ? people[0].hobby : findPerson(name, people.slice(1));
  }
}