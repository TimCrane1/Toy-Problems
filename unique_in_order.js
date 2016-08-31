//---- Unique In Order ----//

//The function uniqueInOrder should take as an argument a sequence and returns a list of items without any elements with the same value next to each other, also preserving the original order of elements.
//For example: uniqueInOrder('AAAABBBCCDAABBB') => ['A', 'B', 'C', 'D', 'A', 'B']

//solution using a for loop
function uniqueInOrder(iterable) {
  if (!iterable.length) {
    return [];
  }
  var result = [iterable[0]];
  for (var i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i-1]) {
      result.push(iterable[i]);
    }
  }
  return result;
}

//solution using filter
function uniqueInOrder(iterable) {
  return Array.prototype.filter.call(iterable, function(prev, i){ return iterable[i - 1] !== prev});
}












