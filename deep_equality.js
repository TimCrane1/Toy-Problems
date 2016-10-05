//---- Deep Equality ----//

//The function deepEquals takes as parameters two objects.  
//deepEquals should return a boolean; true if both object's structures are equivalent 
//and also both object's descendants structures are equivalent, false otherwise.

deepEquals = function(a, b){
  //check the number of properties in each object
  if(Object.keys(a).length !== Object.keys(b).length) {
      return false;
      //check if one is an array and the other is not
    } else if (Array.isArray(a) && !Array.isArray(b) ||
               Array.isArray(b) && !Array.isArray(a)) {
                 return false;
      } else {
        for(var prop in a) {
          //check the type of each value, if the type is an object call deepEquals recursively
          if (typeof a[prop] === 'object'  && typeof b[prop] === 'object') {
            return deepEquals(a[prop], b[prop]);
          } else if (a[prop] !== b[prop]) {
            return false;
            }
    }
  }
  return true;
}