//---- Nested Arrays ----//

//Given an array of arbitrarily nested arrays, the function nestedArrays should return the deepest level of nesting that contains a non-array value.
//For example:  
//  Input               Output
//  [ [ 5 ], [ [ ] ] ]                    2
//  [ 10, 20, 30, 40 ]                    1
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]    4
//  [ ]                                   0
//  [ [ [ ] ] ]                           0

function nestedArrays(array) {
  var level = 0;
  //dive checks to see if the element is an array and if so, if there is a value inside
  function dive (arr, depth){
    arr.forEach(function (el){
      if (Array.isArray(el) && el[0] !== undefined) {
        //if true, depth increases and dive is called recursively
        dive(el, depth+1);
      } else if (!Array.isArray(el) && depth+1 > level) {
        level = depth+1;
      }
    });
  }

  dive(array, level);
  return level;
}