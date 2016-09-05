//---- Zip Sum ----//

//The function zipSum should take as parameters two arrays of negative/positive integers.
//It should return a new array such that each element at index n is the sum of the two elements from the other arrays at their index n’s.
//For example:    Input     |     Output       |       Result
//             [ 100, 1 ]   |    [ 50, 5 ]     |     [ 150, 6 ]
//           [ 10, 20, 30 ] |    [ 1, 2 ]      |     [ 11, 22 ]

function zipSum (xs, ys) {
  var length = xs.length > ys.length ? ys.length : xs.length;
  var result = [];
  for (var i = 0; i < length; i++) {
    result.push(xs[i] + ys[i]);
  }
  return result;
}
