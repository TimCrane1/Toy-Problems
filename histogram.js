//---- histogram ----//


//The function histogram should take a collection as parameter and return an object with unique elements as key
//and number of instances of the element as value.
//For example: ['a', 'b', 'a', 'c', 'b', 'a', 'd'] => { 'a' : 3, 'b' : 2, 'c' : 1, 'd' : 1}


function histogram(collection) {
  return collection.reduce((accumulator, element) => {
    //if an element does not exist in the object, put a property of it in the object and give it a value of 1
    if (accumulator[element] === undefined) {
      accumulator[element] = 1;
    } else {
      //if it already exists, increment it's value
      accumulator[element]++;
    }
    return accumulator;
  }, {})
}

