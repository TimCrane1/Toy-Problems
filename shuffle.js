//---- Shuffle ----//

//The function shuffle should take a collection as parameter and return the collection in randomized order. 

function shuffle(collection) {
  //make shallow copy of the collection
  var result = collection.slice();
  var random;
  var temp;
  //iterate through the collection
  for (var i = 0; i < result.length; i++) {
    //get a random index number in the collection
    random = Math.floor(Math.random() * result.length);
    //set a temporary variable to the current index position
    temp = result[i];
    //set the current index position to the value of a random result index position
    result[i] = result[random];
    //set the value of the random result index position to the value of the temporary variable
    result[random] = temp;
  }
  //return the randomized collection
  return result;
}